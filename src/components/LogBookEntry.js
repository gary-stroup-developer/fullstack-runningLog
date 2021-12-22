import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export const LogBookEntry = () => {
    const [entry, setEntry] = useState({title:'',distance: '',time:'',notes: ''});
    const {id} = useParams();

    useEffect(() => {
        const getEntry = async() => {
            const request = await axios.get(`/api/logbook/article/${id}`);
            const {data} = request.data;
            const {title, distance, time, notes} = data;
            setEntry({...entry,title,distance,time,notes});
        }

        getEntry();
    }, [])

    return (
        <div style={{padding: "3rem"}}>
            <h3><span>Title: </span>{entry.title}</h3>
            <p><span>Distance:</span> {entry.distance} mi</p>
            <p><span>Time:</span> {entry.time}</p>
            <p>Notes</p>
            <p style={{width: "450px",height:"300px"}}>{entry.notes}</p>
            <Link to={`/logbook`}>Back</Link>
        </div>
    )
}