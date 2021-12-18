import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavbarComponent } from '../components/Navbar';
import { Table, Row, Col,Collection, CollectionItem, Button, Icon, TextInput} from 'react-materialize';
import { MotivationImage } from '../components/MotivationImage';
import './HomePage.css';
import { useUser } from '../auth/useUser';



export const HomePage = (props) => {
    //quote state variables
    const [dailyQuote, setDailyQuote] = useState('');
    const [dailyAuthor, setDailyAuthor] = useState('');

    //user stats state variables
    const [totalMiles, setTotalMiles] = useState(0);
    const [weeklyMiles, setWeeklyMiles] = useState(0);
    const [dateValue, setDateValue] = useState('');
    const [raceNameValue, setRaceNameValue] = useState('');
    const [resultValue, setResultValue] = useState('');
    const [raceResults, setRaceResults] = useState([]);
    const [showForm, setShowForm] = useState(false);

    //get user info
    const user = useUser();
    const {userName, isVerified, id,firstName,picture} = user;

    //make an API call to get the random quote
    useEffect(() => {
        
        const getQuote = async() => {
            const response = await axios.get("https://type.fit/api/quotes");
            const data = response.data
            const num = Math.floor(Math.random()*data.length)
            const quote = data[num].text;
            const author = data[num].author;
            setDailyQuote(quote);
            setDailyAuthor(author)
        }
        
        getQuote();
    }, [])

    //make request to get user mileage
    useEffect(()=>{

        const getData = async() => {
        const response = await axios.get(`/api/get-race-results/${userName}`);
        const raceResultsData = response.data;
        setRaceResults([...raceResultsData]);
        }
        getData();
    },[setRaceResults,resultValue,showForm]);

    useEffect(()=>{

        const getData = async() => {
        const response = await axios.get(`/api/getMileage/${id}`);
        const {totalMilesResult,weeklyMilesResult} = response.data;
        setTotalMiles(totalMilesResult);
        setWeeklyMiles(weeklyMilesResult);
        }
        getData();
    },[setTotalMiles]);

    //add new row of data to the Table
    const addRow = async () => {
        //setRaceResults([...raceResults,{date:dateValue,name:raceNameValue,time:resultValue}]);
        const response = await axios.post('/api/race-results',{userName,date:dateValue,name:raceNameValue,time:resultValue});
        
        setShowForm(false);
        setDateValue('');
        setRaceNameValue('');
        setResultValue('');
   
    }

    //structure the race results into a table format
    const raceEntries = raceResults.map((result) => {
        return <tr>
            <td>{result.date}</td>
            <td>{result.name}</td>
            <td>{result.time}</td>
        </tr>
    })
    
    return (
        <div>
        {isVerified ?
            <div>
            <NavbarComponent  name={firstName} username={userName} /> 
            <div style={{padding:"25px"}}>
                <h1>Welcome {firstName}</h1>
                {picture ?
                <div>
                    <img className="HomePage-img" src={picture} /> 
                </div>:<div></div>}
                <div style={{width: "80%",display:"flex",padding:"10px", justifyContent: "space-between"}}>
                    <p>Total Miles: {totalMiles}</p>
                    <p>Weekly Miles: {weeklyMiles}</p>
                </div>
                 
                <Row>
                <Col m={10} s={12}>
                    <Collection>
                    <CollectionItem>
                        <h5>Daily Motivation</h5>
                        <MotivationImage />
                    </CollectionItem>
                        <CollectionItem>
                        <p>{dailyQuote}</p>
                        <p>{dailyAuthor}</p>
                        </CollectionItem>
                    </Collection>
                </Col>
                </Row>
                <h4>Race Results</h4>
                <Table hoverable={true}>
                    <thead>
                        <tr>
                            <th data-field = "date">Date</th>
                            <th data-field = "race-name">Race</th>
                            <th data-field = "race-time">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {raceEntries}
                    </tbody>
                </Table>
                {showForm? <div>
                            <input type="text" id="raceResult-date" placeholder="Date of Race" value={dateValue} onChange={(e)=>setDateValue(e.target.value) }/>
                            <input type="text" id="raceResult-name" placeholder="Name of Race" value={raceNameValue} onChange={(e)=>setRaceNameValue(e.target.value)} />
                            <input type="text" id="raceResult-time" placeholder="Result of Race" value={resultValue} onChange={(e)=>setResultValue(e.target.value)} />
                            <Button onClick={addRow} >Add Data</Button>
                        </div>:
                        <Button icon={<Icon>add</Icon>} small onClick={()=> setShowForm(true)}></Button>
                        }
                </div>
            </div>:<div>
            <p>Please verify your email to access the application</p>
            </div>
        }
        </div>
    )
}