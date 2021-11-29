import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';

export const ForgotPasswordPage = () => {
    //setup state variables
    const [isSuccess, setIsSuccess] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [message, setMessage] = useState('');
    //initialize instance of useHistory
    const history = useHistory();
    //create function resetPassword
    const sendEmailToResetPassword = async () => {
        const response = await axios.put('/api/forgot-password',{userName:emailValue});
        setMessage(response.data);
        setIsSuccess(true);
        setTimeout(()=> {
            history.push('/login');
        },5000);
    }

    return (
        <div>
        {!isSuccess ?<div>
            <p>Enter your email below and click Reset Password</p>
            <input type='email' value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} />
            <button onClick={sendEmailToResetPassword}>Reset Password</button>
            </div>:<div>{message}</div>
        }
        </div>
    )
}