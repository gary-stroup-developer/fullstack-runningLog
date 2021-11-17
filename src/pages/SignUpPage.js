import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useToken } from '../auth/useToken';

export const SignUpPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const [,setToken] = useToken();

    const signupClicked = async() => {
        try {
            const response = await axios.post('/api/signup',{email:emailValue, password: passwordValue});
            const {token} = response.data;
            setToken(token);
            history.push('/please-verify');
            
        }catch(err) {
            setErrorMessage(err.message);
        }
    };
    return (
        <div>
            <h1>Sign Up</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <input type="email" placeholder="someone@gmail.com" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
            <input type="password" placeholder="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
            <input type="password" placeholder="confirm password" value={confirmPasswordValue} onChange={(e) => setConfirmPasswordValue(e.target.value)} />
            <button disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue} onCLick={signupClicked}>
                Sign Up
            </button>
        </div>
    )
}