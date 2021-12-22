import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EmailVerificationFail } from './EmailVerificationFail';
import { EmailVerificationSuccess } from './EmailVerificationSuccess';

import { Preloader, Col} from 'react-materialize';


export const EmailVerificationLandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const {verificationString} = useParams();

    

    useEffect(() => {
        const onLoading = async () => {
            try {
                const response = await axios.put('/api/verify-email',{verificationString});
                const {message} = response.data;
              
                setMessage(message);
                setIsSuccess(true);
                setIsLoading(false);
                
            }catch(err) {
                setIsSuccess(false);
                setIsLoading(false);
            }
        }
        onLoading();
    },[message, verificationString])
    
    if(isLoading) return  <Col s={4}>
    <Preloader active color="blue" flashing />
    </Col>;
    if(!isSuccess) return <EmailVerificationFail verificationString={verificationString} />;
    return <EmailVerificationSuccess message = {message} />;
}