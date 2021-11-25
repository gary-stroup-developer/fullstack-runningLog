import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser } from '../auth/useUser';
import { NavbarComponent } from '../components/Navbar';
import { Table, Row, Col,Collection, CollectionItem} from 'react-materialize';
import { MotivationImage } from '../components/MotivationImage';



export const HomePage = () => {
    const [dailyQuote, setDailyQuote] = useState('');
    const [dailyAuthor, setDailyAuthor] = useState('');

    const user = useUser();
    const {userName, firstName, isVerified, id} = user;

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
    }, [setDailyQuote])
    
    return (
        <div>
        {isVerified? 
        (
            <div>
            <NavbarComponent name={firstName} username={userName} />
            <div style={{padding:"25px"}}>
                <h1>Welcome {firstName}</h1>
                <div style={{width: "80%",display:"flex",padding:"10px", justifyContent: "space-between"}}>
                    <p>Total Miles: 750</p>
                    <p>Weekly Miles: 55</p>
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
                        <tr>
                            <td>15-Mar-2021</td>
                            <td>Oregon Hills Half Marathon</td>
                            <td>1:45:12</td>
                        </tr>
                        <tr>
                            <td>30-Jun-2021</td>
                            <td>San Francisco Half Marathon</td>
                            <td>1:53:54</td>
                        </tr>
                        <tr>
                            <td>12-Nov-2021</td>
                            <td>Mission Bay 10k</td>
                            <td>38:12</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </div>
        ):<div>
            <p>Please check email to finish the verification process to access the app features</p>
        </div>
        }
        </div>
    )
}