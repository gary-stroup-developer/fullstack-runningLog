import { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { ResetPasswordFail } from './ResetPasswordFail';
import { ResetPasswordSuccess } from './ResetPasswordSuccess';

export const ResetPasswordLandingPage = () => {
    //set up state
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [isSuccess, setIsSuccess] = useState('');
    const [showForm, setShowForm] = useState(true);

    //get the verification string
    const verificationString = useParams();
    
    const resetPassword = async () => {
        try {
            const response = await axios.put('/api/reset-password',{password: passwordValue,verificationString});
            const {message} = response.data;

            setIsSuccess(message);
            setShowForm(false);
        }catch(err) {
            setIsSuccess(false);
            setShowForm(false);
        }
    }

    return (
        <div>
        {showForm ? 
        <div>
            <h2>Please enter in your new password below</h2>
            <input 
                type='password' 
                value={passwordValue} 
                placeholder='password' 
                onChange={(e) => setPasswordValue(e.target.value)} />
            <input 
                type='password'
                value={confirmPasswordValue}
                placeholder='confirm password'
                onChange = { () => setConfirmPasswordValue(confirmPasswordValue) }
            />
            <button disabled={passwordValue !== confirmPasswordValue} onClick={resetPassword}>Reset Password</button>
        </div>
        : null
            
        }
            {isSuccess ? <ResetPasswordSuccess />:<ResetPasswordFail />}
         
        </div>
    )
}