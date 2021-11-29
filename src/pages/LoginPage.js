import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useToken } from '../auth/useToken';
import { Button, Icon } from 'react-materialize';
import googleBtn from '../images/btn_google.png';
import { useQueryParams } from '../util/useQueryParams';


export const LoginPage = () => {
    const [,setToken] = useToken();

    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState('');
    const [googleOauthUrl, setGoogleOauthUrl] = useState('');
    const {token: oauthToken} = useQueryParams();

    useEffect(() => {
        if(oauthToken){
            setToken(oauthToken);
            history.push('/home');
        }
    }, [oauthToken,setToken,history]);

    useEffect(()=> {
        const loadOauthUrl = async () => {
            try {
                const response = await axios.get('/auth/google/url');
                const {url} = response.data;
                setGoogleOauthUrl(url);
            }catch(err){
                setGoogleOauthUrl(null);
            }
        }
        loadOauthUrl();
    },[])


    const loginClicked = async () => {
        try {
            const response = await axios.post('/api/login', {userName:emailValue, password: passwordValue});
            const {token} = response.data;
            setToken(token);
            history.push('/home');
        } catch(err) {
            setErrorMessage(err.message);
        }
    };

    return (
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <h1>Login</h1>
                <p>{errorMessage}</p>
                <label htmlFor="email">Username</label>
                <input id="email" type="email" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} placeholder="someone@gmail.com" />
                <label htmlFor = "password">Password</label>
                <input id="password" type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} placeholder="password" />
                <Button style={{marginRight:"15px"}} className="orange" disabled={emailValue && passwordValue ? false : true} node="button" type="submit" waves="light" onClick={loginClicked}>Log in<Icon right>send</Icon></Button>
                <Button className="orange" waves="light" onClick={()=>history.push('/forgot-password')}>Forgot Password?</Button>
                <hr/> <span>or</span><hr />
                <button style={{border:"none",background:"transparent"}} onClick={()=>{window.location.href=googleOauthUrl}}><img src={googleBtn} alt="google button" /></button>
                <div style={{height:"20px"}} />
                <p>Don't have an account? sign up to get access</p>
                <Button className="orange" onClick={()=>history.push('/signup')}>Sign up</Button>
            </div>
        </div>
    )
}