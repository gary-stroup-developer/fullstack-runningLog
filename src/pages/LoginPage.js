import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useToken } from '../auth/useToken';

export const LoginPage = () => {
    const [,setToken] = useToken();

    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState('');

    const loginClicked = async () => {
        try {
            const response = await axios.post('/api/login', {email:emailValue, password: passwordValue});
            const {token} = response.data;
            setToken(token);
            history.push('/');
        } catch(err) {
            setErrorMessage(err.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <p>{errorMessage}</p>
            <input type="email" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} placeholder="someone@gmail.com" />
            <input type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} placeholder="password" />
            <button onClick={loginClicked}>Log in</button>
            <hr />
            <button onClick={()=>history.push('/forgot-password')}>Forgot Password?</button>
            <p>don't have an account? sign up to get access</p>
            <button onClick={()=>history.push('/signup')}>Sign up</button>
        </div>
    )
}