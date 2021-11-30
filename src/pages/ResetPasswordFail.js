import { useHistory } from "react-router"
export const ResetPasswordFail = () => {
    const history = useHistory();
    return (
        <div>
            <h1>😩</h1>
            <p>Something went wrong. Try resetting your password. If problems persist contact us</p>
            <button onClick={() => history.push('/forgot-password')}>Reset Password</button>
        </div>
    )
}