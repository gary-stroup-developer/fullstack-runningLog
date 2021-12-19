import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useToken } from '../auth/useToken';
import { Button} from 'react-materialize';

export const SignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const [,setToken] = useToken();

    const signupClicked = async() => {
        try {
            const response = await axios.post('/api/signup',{userName:emailValue, password: passwordValue,firstName, lastName});
            const {token} = response.data;
            setToken(token);
            history.push('/please-verify');
            
        }catch(err) {
            setErrorMessage(err.message);
        }
    };
    return (
        <div className="row">
        <div className="col s12 m6 offset-m3">
            <h1>Sign Up</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <input type="text" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder="someone@gmail.com" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
            <input type="password" placeholder="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
            <input type="password" placeholder="confirm password" value={confirmPasswordValue} onChange={(e) => setConfirmPasswordValue(e.target.value)} />
            <Button className="orange" disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue} type="submit" onClick={signupClicked}>
                Sign Up
            </Button>
        </div>
        </div>
    )
}