import { useState, useEffect } from "react"
import axios from 'axios';
import { NavbarComponent } from "./Navbar"
import { Divider, Button } from "react-materialize"
import { Link } from "react-router-dom";
import { AddEntryForm } from "./AddEntryForm"
import { useUser } from "../auth/useUser"

export const Logbook = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [displayAddEntry, setDisplay] = useState(false);
    const [logbookEntries, setLogbookEntries] = useState([{title:'Get Started',notes:'Add a new entry'}]);
    const user = useUser();
    const {id, firstName, userName} = user;

    useEffect(()=> {
        const getEntry = async () => {
        const response = await axios.get(`/api/logbookentries/${id}`);
        if(response.data == null){
            setLogbookEntries([{title:'Get Started',notes:"Add a new entry"}])
        }
        setLogbookEntries(response.data);
    }
    getEntry();
    
    },[setLogbookEntries]);

    const addEntry = ()=>{
        setDisplay(true);
    }

    const entry = logbookEntries.map((val) => {
        return <div key={id}>
        <h3>{val.title}</h3>
        <p>{val.notes.substring(0,100)}<span style={{color:"blue"}}><Link to={`/logbook/article/${id}`}>...more</Link></span></p>
    </div>
    })

    return (
       
        <div style={{backgroundColor:"#fafafa"}}>
            <NavbarComponent name={firstName} username={userName} />
                <div className="row">
                    <div className="col s12 m3" style={{height:"70vh", backgroundColor:"#fafafa",borderRight:"1px solid #D8D8D8"}}>
                        <Button small className="orange"style={{margin:"20px auto"}} onClick={addEntry}>Add Entry</Button>
                        <Divider/>
                        <div style={{marginTop:"25px"}} >
                            <p>Filter entry by month and year</p>
                            <label htmlFor="month">Month</label>
                            <input id="month" name="month" type="text" value={month} onChange={(e)=>setMonth(e.target.value)} />
                            <label htmlFor="year">Year</label>
                            <input id="year" name="year" type="text" value={year} onChange={(e)=>setYear(e.target.value)} />
                            <Button small className="orange">View Entry</Button>
                        </div>
 
                    </div>
                
                    <div className="col s12 m9" style={{backgroundColor:"#fafafa",height:"100vh"}}>
                    {displayAddEntry ? <AddEntryForm id={id} userName={userName} /> :  
                        <div className="container">
                        {entry}
                        </div>
                    }
                    </div>  
                </div>   
        </div>
    )
}