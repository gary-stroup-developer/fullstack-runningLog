import { NavbarComponent } from "./Navbar"
import { Row, Col, Divider } from "react-materialize"
import { PaceChart } from "./PaceChart"
import { WorkoutPlan } from "./WorkoutPlan"
import { RunningGoals } from "./RunningGoals"
import { useUser } from '../auth/useUser';

import '../styles/trainingGuide.css';

export const TrainingGuide = () => {

    const user = useUser();
    const {userName, firstName,id} = user;
    return (
        <div>
            <NavbarComponent name={firstName} username={userName} /> 
            <Row>
                <Col id="training-guide-sideNav" s={12} m={3}>
                    <a href="#running-goals">Running Goals</a>
                    <a href="#workout-plan">Workout Plan</a>
                    <a href="#pace-chart">Pace Chart</a>
                    <Divider />
                    <a href="#injury-prevention">Injury Prevention</a>
                    <a href="#nutrition">Nutrition</a>
                </Col>
                <Col id="training-guide-main" s={12} m={9}>
                    <RunningGoals />
                    <WorkoutPlan />
                    <PaceChart />
                </Col>
            </Row>
        </div>
    )
}