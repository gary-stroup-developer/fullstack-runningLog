import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

export const EmailVerificationLandingPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    return (
        <div className="EmailVerificationLandingPage">
            <p>congrats</p>
        </div>
    )
}