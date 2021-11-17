import { useState } from 'react';
import axios from 'axios';
import { ResetPasswordFail } from './ResetPasswordFail';
import { ResetPasswordSuccess } from './ResetPasswordSuccess';

export const ResetPasswordLandingPage = () => {
    //set up state
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [showForm, setShowForm] = useState(true);
    
    const resetPassword = async () => {
        try {
            const response = await axios.put('/api/reset-password',{password: passwordValue});
            const message = response.data;

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