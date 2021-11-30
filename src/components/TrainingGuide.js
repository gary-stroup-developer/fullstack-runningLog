import { NavbarComponent } from "./Navbar"
import { Table, Row, Col, Divider } from "react-materialize"

export const TrainingGuide = () => {
    return (
        <div>
            <NavbarComponent />
            <Row>
                <Col s={12} m={3} style={{height:"100%", backgroundColor:"#fafafa",borderRight:"1px solid #D8D8D8"}}>
                    <a href="#running-goals">Running Goals</a>
                    <a href="#workout-plan">Workout Plan</a>
                    <a href="#pace-chart">Pace Chart</a>
                    <Divider />
                    <a href="#injury-prevention">Injury Prevention</a>
                    <a href="#nutrition">Nutrition</a>
                </Col>
                <Col s={12} m={9} style={{height:"100%", backgroundColor:"#fafafa",borderRight:"1px solid #D8D8D8"}}>
                    <h3 id="running-goals">Running Goals</h3>
                    <p>Setting goals can often be a difficult task. View the four-step plan to help you reach your target.</p>
                    <ol style={{maxWidth:"450px"}} >
                        <li>
                            <div>
                                <p>Create a List</p>
                                <p>Write down two to four goals you would like to achieve this next 4-6 months. 
                                Examples include runing injury free, achieving a personal 
                                best on a certain course, or losing weight.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Sketch Out A Plan</p>
                                <p>Plan workouts that will help you achieve your goals. A goal of running
                                a half-marathon will involve running more miles. Ideally you would map
                                out your timeline to start with a solid base with a gradual increase in
                                mileage over time.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Break It Up</p>
                                <p>Large goals are best achieved by breaking them into smaller goals.
                                Smaller goals are attainable faster and act as stepping stones to the
                                final goal. The benefit of consistently achieving these smaller goals is
                                an increased confidence level that provides the motivation to continue
                                on your journey.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Analyze And Revise</p>
                                <p>Throughout the process make sure to review your progress by checking
                                your running log. By seeing where you started at and where you are now
                                will determine if you are on track. This will allow you to make adjustments
                                to ensure you can achieve your goal.</p>
                            </div>
                        </li>
          
                    </ol>
                    <div id="workout-plan">
                        <h3>Workout Plan</h3>
                        <p>Beginner</p>
                        <ol>
                            <li>Start off each workout by walking for 10 mins.</li>
                            <li>Warm up the body with active stretching that includes arm circles,
                            one or two-legged hops, high skips, and any pilates movements.
                            </li>
                            <li>Jog for 20-30 minutes each day. Do not worry about the pace as the
                            goal is to get your body acclimated to running. Starting off too fast or
                            running too many miles at first can result in an injury.
                            </li>
                            <li>End the workout with some static strecthing</li>
                            <li>Increase your weekly mileage 10% each week</li>
                        </ol>
                        <p>Beginner Next Level</p>
                        <ol>
                            <li>
                                <p>Monday</p>
                                <p>Run for 30mins</p>
                            </li>
                            <li>
                                <p>Tuesday</p>
                                <p>Track Workout: 6 x 200m @ 85%</p>
                            </li>
                            <li>
                                <p>Wednesday</p>
                                <p>Run for 30mins</p>
                            </li>
                            <li>
                                <p>Thursday</p>
                                <p>Run for 30mins</p>
                            </li>
                            <li>
                                <p>Friday</p>
                                <p>Run for 30mins</p>
                            </li>
                            <li>
                                <p>Saturday</p>
                                <p>Run for 30mins</p>
                            </li>
                            <li>
                                <p>Sunday</p>
                                <p>Run for 30mins</p>
                            </li>
                        </ol>
                        <p>Intermediate</p>
                        <ol>
                            <li>
                                <p>Monday</p>
                                <p>Run for 30mins</p>
                            </li>
                            <li>
                                <p>Tuesday</p>
                                <p>Track Workout: 6 x 400m @ 85%</p>
                            </li>
                            <li>
                                <p>Wednesday</p>
                                <p>Run for 30mins</p>
                            </li>
                            <li>
                                <p>Thursday</p>
                                <p>Track Workout: 4-6 x 1 mile repeats @ 70-85%</p>
                            </li>
                            <li>
                                <p>Friday</p>
                                <p>Run for 30mins</p>
                            </li>
                            <li>
                                <p>Saturday</p>
                                <p>Run for 90mins</p>
                            </li>
                            <li>
                                <p>Sunday</p>
                                <p>Rest, Bike, or Swim</p>
                            </li>
                        </ol>
                    </div>
                    <div id="pace-chart">
                        <h3 style={{display:"inline-block",margin:"10px 25%"}}>Pace Chart</h3>
                        <Table hoverable={true}>
                            <thead>
                                <tr>
                                    <th>1 mi</th>
                                    <th>2 mi</th>
                                    <th>5k</th>
                                    <th>10k</th>
                                    <th>13.2 mi</th>
                                    <th>15 mi</th>
                                    <th>26.2 mi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5:30</td>
                                    <td>11:00</td>
                                    <td>17:05</td>
                                    <td>34:11</td>
                                    <td>1:12:06</td>
                                    <td>1:22:30</td>
                                    <td>2:24:12</td>
                                </tr>
                                <tr>
                                    <td>5:45</td>
                                    <td>11:30</td>
                                    <td>17:52</td>
                                    <td>35:44</td>
                                    <td>1:15:23</td>
                                    <td>1:26:15</td>
                                    <td>2:30:46</td>
                                </tr>
                                <tr>
                                    <td>6:00</td>
                                    <td>12:00</td>
                                    <td>18:39</td>
                                    <td>37:17</td>
                                    <td>1:18:39</td>
                                    <td>1:30:00</td>
                                    <td>2:37:19</td>
                                </tr>
                                <tr>
                                    <td>6:30</td>
                                    <td>13:00</td>
                                    <td>20:12</td>
                                    <td>40:23</td>
                                    <td>1:25:13</td>
                                    <td>1:37:30</td>
                                    <td>2:50:25</td>
                                </tr>
                                <tr>
                                    <td>7:00</td>
                                    <td>14:00</td>
                                    <td>21:45</td>
                                    <td>43:30</td>
                                    <td>1:31:46</td>
                                    <td>1:45:00</td>
                                    <td>3:03:32</td>
                                </tr>
                                <tr>
                                    <td>7:30</td>
                                    <td>15:00</td>
                                    <td>23:18</td>
                                    <td>46:36</td>
                                    <td>1:38:19</td>
                                    <td>1:52:30</td>
                                    <td>3:16:39</td>
                                </tr>
                                <tr>
                                    <td>8:00</td>
                                    <td>16:00</td>
                                    <td>24:51</td>
                                    <td>49:43</td>
                                    <td>1:44:52</td>
                                    <td>2:00:00</td>
                                    <td>3:29:45</td>
                                </tr>
                                <tr>
                                    <td>8:30</td>
                                    <td>17:00</td>
                                    <td>26:25</td>
                                    <td>52:49</td>
                                    <td>1:51:26</td>
                                    <td>2:07:30</td>
                                    <td>3:42:52</td>
                                </tr>
                                <tr>
                                    <td>9:00</td>
                                    <td>18:00</td>
                                    <td>27:58</td>
                                    <td>55:56</td>
                                    <td>1:57:59</td>
                                    <td>2:15:00</td>
                                    <td>3:55:58</td>
                                </tr>
                                <tr>
                                    <td>9:30</td>
                                    <td>19:00</td>
                                    <td>29:31</td>
                                    <td>59:02</td>
                                    <td>2:04:32</td>
                                    <td>2:22:30</td>
                                    <td>4:09:05</td>
                                </tr>
                                <tr>
                                    <td>10:00</td>
                                    <td>20:00</td>
                                    <td>31:04</td>
                                    <td>1:02:08</td>
                                    <td>2:11:05</td>
                                    <td>2:30:00</td>
                                    <td>4:22:11</td>
                                </tr>
                                <tr>
                                    <td>10:30</td>
                                    <td>21:00</td>
                                    <td>32:37</td>
                                    <td>1:05:15</td>
                                    <td>2:17:39</td>
                                    <td>2:37:30</td>
                                    <td>4:35:18</td>
                                </tr>
                                <tr>
                                    <td>11:00</td>
                                    <td>22:00</td>
                                    <td>34:11</td>
                                    <td>1:08:21</td>
                                    <td>2:24:12</td>
                                    <td>2:45:00</td>
                                    <td>4:48:25</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}