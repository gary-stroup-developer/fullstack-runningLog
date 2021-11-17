import { useHistory } from "react-router"
export const ResetPasswordSuccess = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Success</h1>
            <p>Password has been reset. Please login with your new password.</p>
            <button onClick={() => history.push('/login')}>Go to Login Page</button>
        </div>
    )
}