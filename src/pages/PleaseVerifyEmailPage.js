import { useEffect } from "react"
import { useHistory } from "react-router";

export const PleaseVerifyEmailPage = () => {
    const history = useHistory();

    useEffect(()=> {
        setTimeout(()=> {
            history.push('/login');
        }, 5000);
    })
    return (
        <div classname="PleaseVerifyEmailPage">
            <h1>Verification Email Sent!</h1>
            <p>Please check your email for the confirmation link.</p>
            <p>Click the link to complete the sign up process.</p>
        </div>
    )
}