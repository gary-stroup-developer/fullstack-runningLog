import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ResetPasswordFail } from './ResetPasswordFail';
import { ResetPasswordSuccess } from './ResetPasswordSuccess';

export const ResetPasswordLandingPage = () => {
    //set up state
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [response, setResponse] = useState('');

    //get the verification string
    const {verificationString} = useParams();
    
    const resetPassword = async () => {
        try {
            const response = await axios.put('/api/reset-password',{password: passwordValue,verificationString});
            setResponse(response.data);

            setIsSuccess(true);
            setShowForm(false);
        }catch(err) {
            setIsSuccess(false);
            setShowForm(false);
        }
    }

if(showForm){
    return (
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
                onChange = { (e) => setConfirmPasswordValue(e.target.value) }
            />
            <button disabled={passwordValue !== confirmPasswordValue} onClick={resetPassword}>Reset Password</button>
        </div>
    )
}

    if(!isSuccess) {
        return <div>
            <ResetPasswordFail />
            {response}
        </div>
    }

    return <div>
        <ResetPasswordSuccess />
        {response}
    </div>
}