import axios from "axios";
import { useHistory } from "react-router";
import { useState } from "react";

export const EmailVerificationFail = (props) => {
    // const {userName, verificationString} = props;
    // const history = useHistory();
    // const [eMessage, setMessage] = useState('');

    // const resendEmail = async () => {
    //     const response = await axios.post('/api/resendEmail',{userName,verificationString});
    //     const {message} = response.data;

    //     setMessage(message);

    //     if(message === 'Request sent...please check your email'){
    //         setTimeout(() => {
    //             history.push('/login');
    //         }, 5000);
            
    //     } else {
    //         setTimeout(() => {
    //           history.push('/');  
    //         }, 5000);
            
    //     }
    // }
    return (
        <div className="EmailVerificationFail">
            <h1>Sorry</h1>
            <p>Your email could not be verified.</p>
            <p>Try sending another verification email</p>
            {/* <button onClick={resendEmail}>Resend email</button>
            {eMessage ? <p>{eMessage}</p>:null} */}
        </div>
    )
}