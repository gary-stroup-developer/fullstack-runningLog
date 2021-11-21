import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { EmailVerificationFail } from './EmailVerificationFail';
import { EmailVerificationSuccess } from './EmailVerificationSuccess';
import { useToken } from '../auth/useToken';

export const EmailVerificationLandingPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const verificationString = useParams();
    const [,setToken] = useToken();

    useEffect(() => {
        const onLoading = async () => {
            try {
                const response = await axios.put('/api/verify-email',{verificationString});
                const {token} = response.data;
                setToken(token);
                setIsLoading(false);
                setIsSuccess(true);
            }catch(err) {
                setIsLoading(false);
                setIsSuccess(false);
            }
        }
        onLoading();
    },[setToken, verificationString]);
    
    if(isLoading) return <p>Loading....</p>
    // if(!isSuccess) return <EmailVerificationFail email={email} verificationString={verificationString} />
    return <EmailVerificationSuccess />
}