import { useState } from "react"
import { useHistory } from "react-router";
import axios from 'axios';
import { EntryDatePicker } from "./EntryDatePicker"
import { Button, Icon,TextInput,Textarea } from "react-materialize";
import { useToken } from "../auth/useToken";

export const AddEntryForm = (props) => {
    const [courseValue, setCourseValue] = useState('');
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const [token, setToken] = useToken();
    const [title, setTitle] = useState('');

    const {id, userName} = props;

    const history= useHistory();

    const addToDB = async ()=>{

         try{
            const {newToken} = await axios.post(`/api/logbookentry`,{userName, courseValue, distance, time, notes,id});
            setToken(newToken);
            setCourseValue('');
            setDistance('');
            setTime('')
            setNotes('')
            history.push('/logbook');
         }catch(err){
             setErrMessage('Entry submission was not successful. Failed to connect to the server');
         }
    }
    return (
        <div>
        {errMessage != ''? <p>{errMessage}</p>: <h5>Add New Entry</h5>}
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