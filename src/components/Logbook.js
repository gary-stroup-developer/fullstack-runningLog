import { useState, useEffect } from "react"
import axios from 'axios';
import { NavbarComponent } from "./Navbar"
import { Divider, Button } from "react-materialize"
import { data } from "../data/journalEntries"
import { AddEntryForm } from "./AddEntryForm"
import { useUser } from "../auth/useUser"

export const Logbook = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [displayAddEntry, setDisplay] = useState(false);
    const [logbookEntries, setLogbookEntries] = useState([{title:'Get Started',entry:"Add a new entry"}])
    const user = useUser();
    const {id, firstName, userName} = user;

    useEffect(()=> {
        const logbookEntries = axios.get(`/api/logbookentries/${id}`);
        if(!logbookEntries){
            setLogbookEntries([{title:'Get Started',entry:"Add a new entry"}])
        }
        setLogbookEntries(logbookEntries);
    },[logbookEntries]);

    const addEntry = ()=>{
        setDisplay(true);

    }

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
                            {data.map((d,id)=>(
                                <div key={id}>
                                    <h3>{d.title}</h3>
                                    <p>{d.entry}<span style={{color:"blue"}}>...more</span></p>
                                </div>
                            ))}
                        </div>
                    }
                    </div>  
                </div>   
        </div>
    )
}