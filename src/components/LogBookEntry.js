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
            <h1>{entry.title}</h1>
            <p>{entry.distance}</p>
            <p>{entry.time}</p>
            <p style={{width: "450px",height:"450px"}}>{entry.notes}</p>
            <Link to={`/logbook`}>Back</Link>
        </div>
    )
}