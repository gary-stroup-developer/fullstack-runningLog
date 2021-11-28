import logo from '../images/marathon.png';
import { useHistory } from 'react-router';
import { Button} from 'react-materialize';

export const LandingPage = () => {
    const history = useHistory();
    return (
        <div className="LandingPage row">
            <div className="col s12 l6">
                <img style={{width:"70%",paddingTop:"25px"}} src={logo} alt="running characters for landing page" />
            </div>
            <div className="col s12 l6">
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
                <Button className="orange" style={{marginRight:"15px"}} onClick={()=>history.push('/login')}>Log in</Button>
                <Button className="orange" onClick={()=>history.push('/signup')}>Sign up</Button>
            </div>
        </div>
    )
}