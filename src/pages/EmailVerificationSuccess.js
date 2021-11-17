import { useHistory } from "react-router";
import { useEffect } from "react";

export const EmailVerificationSuccess = () => {

    const history = useHistory();

    useEffect(()=> {
        setTimeout(() => {
            history.push('/home');
        },5000);
    },[]);
    
    return (
        <div className="EmailVerificationLandingPage">
            <h1>Congrats</h1>
            <p>You have successfully verified your user email address.</p>
            <p>From now on, you will have full access to all the app features.</p>
            <p>Running Log will help you track your progress. Good luck on your running journey!</p>
        </div>
    )
}