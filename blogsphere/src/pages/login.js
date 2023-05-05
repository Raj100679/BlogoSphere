import { useContext, useState } from 'react';
import {Navigate} from "react-router-dom"
import './login.css'
import { UserContext } from '../UserContext';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);

    async function login(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method : 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        if(response.ok){
            response.json().then(userInfo =>{
                setUserInfo(userInfo);
                setRedirect(true);
            })
            
        }else{
            alert('Wrong crendentials');
        }
    }
    if(redirect){
        return <Navigate to={'/'}/>
    }
    return (
        <>
            <section>
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <div className="box">
                    
                    <div className="container">
                        <div className="form">
                            <h2>Login</h2>
                            <form onSubmit={login}>
                                <div className="inputBox">
                                    <input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)}/>
                                </div>

                                <div className="inputBox">
                                    <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                                </div>


                                <div className="inputBox">
                                    <input type="submit" value="Submit" />
                                </div>
                                <p className="forget"> <a href="#">Forget password?</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}