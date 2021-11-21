import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';

export const ForgotPasswordPage = () => {
    //setup state variables
    const [isSuccess, setIsSuccess] = useState('');
    const [emailValue, setEmailValue] = useState('');
    //initialize instance of useHistory
    const history = useHistory();
    //create function resetPassword
    const sendEmailToResetPassword = async () => {
        const response = await axios.post('/api/forgot-password',{userName:emailValue});
        const {message} = response.data;
        setIsSuccess(message);
        setTimeout(()=> {
            history.push('/login');
        },5000);
    }

    return (
        <div>
            <p>Enter your email below and click Reset Password</p>
            <input type='email' value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} />
            <button onClick={sendEmailToResetPassword}>Reset Password</button>
            {isSuccess ?<p>Please check your email to reset your password</p>
            :<div><p>Sorry, something went wrong. Please re-enter your email</p>
            <button onClick={()=>history.push('forgot-password')}>Re-enter email</button></div>
            }
        </div>
    )
}