import logo from '../images/marathon.png';
import { useHistory } from 'react-router';

export const LandingPage = () => {
    const history = useHistory();
    return (
        <div className="LandingPage">
            <div>
                <img src={logo} alt="running characters for landing page" />
            </div>
            <div>
                <h1>Running Log</h1>
                <p>Running Log is your all in one training guide. Developed with 
                runner’s in mind. When you register you will have access to:</p>
                <ul>
                    <li>Workout Log</li>
                    <li>Progress Tracker</li>
                    <li>Personal record table</li>
                    <li>Pace Chart</li>
                    <li>and more...</li>
                </ul>
                <hr />
                <p>Get your running journey started today!</p>
                <button onClick={()=>history.push('/login')}>Log in</button>
                <button onClick={()=>history.push('/signup')}>Sign up</button>
            </div>
        </div>
    )
}