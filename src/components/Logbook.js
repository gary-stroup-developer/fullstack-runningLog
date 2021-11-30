import { useState } from "react"
import { NavbarComponent } from "./Navbar"
import { Divider, Button } from "react-materialize"
import { data } from "../data/journalEntries"

export const Logbook = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    return (
        <div>
            <NavbarComponent />
                <div className="row">
                    <div className="col s12 m3" style={{height:"100%", backgroundColor:"#fafafa",borderRight:"1px solid #D8D8D8"}}>
                        <Button small className="orange"style={{margin:"20px auto"}}>Add Entry</Button>
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
                        <div className="container">
                            {data.map((d,id)=>(
                                <div key={id}>
                                    <h3>{d.title}</h3>
                                    <p>{d.entry}<span style={{color:"blue"}}>...more</span></p>
                                </div>
                            ))}
                        </div>
                    </div>  
                </div>   
        </div>
    )
}