import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EmailVerificationFail } from './EmailVerificationFail';
import { EmailVerificationSuccess } from './EmailVerificationSuccess';
import { useToken } from '../auth/useToken';


export const EmailVerificationLandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    const {verificationString} = useParams();
    const [, setToken] = useToken();
    

    useEffect(() => {
        const onLoading = async () => {
            try {
                const response = await axios.put('/api/verify-email',{verificationString});
                const {token} = response.data;
              
                setToken(token);
                setIsSuccess(true);
                setIsLoading(false);
                
            }catch(err) {
                setIsSuccess(false);
                setIsLoading(false);
            }
        }
        onLoading();
    },[setToken, verificationString])
    
    if(isLoading) return <p>Loading....</p>;
    if(!isSuccess) return <EmailVerificationFail verificationString={verificationString} />;
    return <EmailVerificationSuccess />;
}