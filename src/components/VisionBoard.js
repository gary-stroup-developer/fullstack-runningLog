import { useState, useEffect } from "react";
import { NavbarComponent } from "./Navbar";
import { useUser } from "../auth/useUser";
import { Button, TextInput } from "react-materialize";
import axios from 'axios';

export const VisionBoard = () => {
    //initialize the state variables
    const [visionTitle, setVisionTitle] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [image5, setImage5] = useState('');
    const [message, setMessage] = useState('');

    //get the user data
    const user = useUser();
    const {id, firstName, userName} = user;

    const uploadImages = async () => {
        const response = await axios.post('/api/upload-images',{userName,id,visionTitle, image1, image2, image3, image4, image5});
        const message = response.data;
        setMessage(message);
        setTimeout(()=> {
            setMessage('');
        },3000);
    };

    useEffect(()=> {
        const getVision = async() => {
        const response = await axios.get('/api/download-mages');
        const {title, image1, image2, image3, image4, image5} = response.data;
        }

        getVision();
    },[]);

    
    return (
        <div>
            <NavbarComponent name={firstName} username={userName} />
            <h3>Vision Board</h3>
            {message != ''? message : <p>Get Started with creating your vision of the future!</p>}
            
            <div className="row">
                <div clasName="col s-12 m-6 offset-3">
                <TextInput s={12} id="vision-title" label="Title" placeholder="Title" value={visionTitle} onChange={(e)=>setVisionTitle(e.target.value)} />
                <TextInput s={12} id="image1" label="First Image" placeholder="Paste the url of the image you want to add" value={image1} onChange={(e)=>setImage1(e.target.value)} />
                <TextInput s={12} id="image2" label="Second Image" placeholder="Paste the url of the image you want to add" value={image2} onChange={(e)=>setImage2(e.target.value)} />
                <TextInput s={12} id="image3" label="Third Image" placeholder="Paste the url of the image you want to add" value={image3} onChange={(e)=>setImage3(e.target.value)} />
                <TextInput s={12} id="image4" label="Fourth Image" placeholder="Paste the url of the image you want to add" value={image4} onChange={(e)=>setImage4(e.target.value)} />
                <TextInput s={12} id="image5" label="Fifth Image" placeholder="Paste the url of the image you want to add" value={image5} onChange={(e)=>setImage5(e.target.value)} />
                <Button onClick={uploadImages} className="orange">Upload Images</Button>
                </div>
            </div>
        </div>
    )
}