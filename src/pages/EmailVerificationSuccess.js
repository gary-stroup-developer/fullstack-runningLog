import { useHistory } from "react-router";
import { useEffect } from "react";

export const EmailVerificationSuccess = (props) => {
    const {message} = props;
    const history = useHistory();

    useEffect(()=> {
        setTimeout(() => {
            history.push('/login');
        },5000);
    },[]);
    
    return (
        <div className="EmailVerificationLandingPage">
            <h1>Congrats</h1>
            <p>You have successfully verified your user email address.</p>
            <p>From now on, you will have full access to all the app features.</p>
            <p>{message}</p>
        </div>
    )
}