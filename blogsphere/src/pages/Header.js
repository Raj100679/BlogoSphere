import { useContext, useEffect} from 'react';
import './nav.css'
import { Link } from "react-router-dom"
import { UserContext } from '../UserContext';

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('BASE_URL/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, []);

    function logout(){
        fetch('BASE_URL/logout', {
            credentials:'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;
    return (
        <>
            <header>
                <div className="Nav">
                    <Link to="/" className="title">BlogSphere</Link>
                    <div className="side">
                        {username && (
                            <>
                                <Link className="login" to='/create'>Create Post</Link>
                                <a className="or">|</a>
                                <Link onClick={logout} className="login" to="/login">logout</Link>
                            </>
                        )}
                        {!username && (
                            <>
                                <Link className="login" to="/login">login</Link>
                                <a className="or">|</a>
                                <Link className="login" to='/register'>Register</Link>
                            </>
                        )}

                    </div>
                </div>
            </header>
        </>
    );
}
