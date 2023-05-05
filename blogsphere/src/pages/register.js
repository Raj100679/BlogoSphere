import './login.css'
import {useState} from 'react';
import {Navigate} from "react-router-dom"
export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register',{
            method: 'POST',
            body: JSON.stringify({username,email,password}),
            headers: {'Content-Type':'application/json'},

        });

        if(response.status ===200){
            setRedirect(true);
            alert('Registration Successful!!'); 
        }else{
            alert('Registration Failed!!'); 
        }
    }

    if(redirect){
        return <Navigate to={'/login'}/>
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
                            <h2>Register</h2>
                            <form onSubmit={register}>
                                <div className="inputBox">
                                    <input type="text" placeholder="Username" 
                                    value={username} 
                                    onChange={ev => setUsername(ev.target.value)} />
                                </div>

                                <div className="inputBox">
                                    <input type="email" placeholder="Email" 
                                    value={email} 
                                    onChange={ev => setEmail(ev.target.value)}/>
                                </div>

                                <div className="inputBox">
                                    <input type="password" placeholder="password" 
                                    value={password} 
                                    onChange={ev => setPassword(ev.target.value)}/>
                                </div>


                                <div className="inputBox">
                                    <input type="submit" value="Submit" />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}