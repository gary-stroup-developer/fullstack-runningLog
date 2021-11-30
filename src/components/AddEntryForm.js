import { useState } from "react"
import { useHistory } from "react-router";
import axios from 'axios';
import { EntryDatePicker } from "./EntryDatePicker"
import { Button, Icon,TextInput,Textarea } from "react-materialize";

export const AddEntryForm = (props) => {
    const [courseValue, setCourseValue] = useState('');
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');
    const {id, userName} = props;

    const history= useHistory();

    const addToDB = async (e)=>{
        e.preventDefualt();
        await axios.post(`/api/logbookentry/${id}`,{userName, courseValue, distance, time, notes});
        setCourseValue('');
        setDistance('');
        setTime('')
        setNotes('')
        history.push('/logbook');
    }
    return (
        <div>
            <p style={{color:"grey",fontSize:"12px", marginLeft:"10px"}} >Date</p>
            <EntryDatePicker s={12} />
            
            <TextInput s={12} id="course" label="Course" placeholder="Name of the course you ran today" onChange={(e)=>setCourseValue(e.target.value)} />
        
            <TextInput s={12} id="distance" label="Distance" placeholder="How far did you run?" onChange={(e)=>setDistance(e.target.value)} />
            <TextInput s={12} id="time" label="Time" placeholder="How long did it take you to run" onChange={(e) => setTime(e.target.value)} />
    
            <Textarea s={12} data-length={200} id="training-notes" label="Training Notes" 
            placeholder="Write about the weather..how you were feeling..what did you learn?" onChange={(e) => setNotes(e.target.value)} />
            <Button
            className="orange"
            floating
            fab={{
                direction: 'bottom',
                hoverEnabled: true,
            }}
            icon={<Icon>add</Icon>}
            large
            node="button"
            waves="light"
            onClick={addToDB}
            />
        </div>
    )
}