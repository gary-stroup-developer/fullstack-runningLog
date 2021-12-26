import { useState, useEffect } from "react";
import { NavbarComponent } from "./Navbar";
import { useUser } from "../auth/useUser";
import { Button, Switch, TextInput } from "react-materialize";
import axios from 'axios';

export const VisionBoard = () => {
  
    //initialize the state variables
    const [visionTitle, setVisionTitle] = useState('');
    const [visionboardTitle, setVisionboardTitle] = useState('');
    const [images, setImage] = useState({});
    const [savedImages, setSavedImages] = useState({});
    const [showForm, setShowForm] = useState(false);

    const [message, setMessage] = useState('');

    //get the user data
    const user = useUser();
    const {id, firstName, userName} = user;

    const uploadImages = async () => {
        const response = await axios.post('/api/upload-images',{userName,id,visionTitle, images});
        const {message} = response.data;
        setMessage(message);
        setImage({...images,image1:'',image2: '',image3:'',image4:'',image5:''});
        setVisionTitle('');
        setTimeout(()=> {
            setMessage('');
            setShowForm(false);
        },3000);
    };

    useEffect(()=> {
        const getVision = async() => {
        const response = await axios.get(`/api/download-images/${userName}`);
        if(response == undefined) {
            setMessage('No data available at this time. Please try adding some images');
            setTimeout(()=> {
                setMessage('')
            },3000);
        }
        const {title, image1, image2, image3, image4, image5} = response.data;
  
        setSavedImages({...savedImages,image1, image2, image3, image4, image5});
        setVisionboardTitle(title);

        }

        getVision();
    },[savedImages]);

    const setImages = (e) => {
        const {name, value} = e.target;
        setImage({...images,[name]:value});
    }
    
    return (
        <div>
        <NavbarComponent name={firstName} username={userName} />
        <div id="vision-board" style={{padding: "2rem 4rem"}}>
            
            <h3>Vision Board</h3>
            <p>Get Started with creating your vision of the future!</p>
            <p>Use the toggle to show or hide the form needed to upload images to the board</p>
            <Switch
            id="vision-board-toggle"
            offLabel="hide"
            onChange={()=>setShowForm(!showForm)}
            onLabel="show"
            checked={showForm}
            />
            {/* <Button onClick={()=>setShowForm(false)}>Show Vision Board</Button>
            <Button onClick={()=>setShowForm(true)}>Add or update photos</Button> */}
            {showForm ? 
            <div>
            <p>{message} </p>
            <div className="row">
                <div clasName="col s-12 m-6 offset-3">
                    <TextInput s={12} id="vision-title" label="Title" placeholder="Title" value={visionTitle} onChange={(e)=>setVisionTitle(e.target.value)} />
                    <TextInput s={12} id="image1" label="First Image" placeholder="Paste the url of the image you want to add" name="image1" value={images.image1} onChange={(e)=>setImages(e)} />
                    <TextInput s={12} id="image2" label="Second Image" placeholder="Paste the url of the image you want to add" name="image2" value={images.image2} onChange={(e)=>setImages(e)} />
                    <TextInput s={12} id="image3" label="Third Image" placeholder="Paste the url of the image you want to add" name="image3" value={images.image3} onChange={(e)=>setImages(e)} />
                    <TextInput s={12} id="image4" label="Fourth Image" placeholder="Paste the url of the image you want to add" name="image4" value={images.image4} onChange={(e)=>setImages(e)} />
                    <TextInput s={12} id="image5" label="Fifth Image" placeholder="Paste the url of the image you want to add" name="image5" value={images.image5} onChange={(e)=>setImages(e)} />
                    <Button onClick={uploadImages} className="orange">Upload Images</Button>
                </div>
            </div>
            </div> 
            : <div className="row">
            <h1>{visionboardTitle}</h1>
                <div className="col s-4" style={{backgroundImage: `url(${savedImages.image1})`,backgroundRepeat:"no-repeat", backgroundAttachment: "scroll", backgroundSize: "contain", backgroundPosition: "left top", width: "400px", height:"300px"}} />
                <div className="col s-4" style={{backgroundImage: `url(${savedImages.image2})`,backgroundRepeat:"no-repeat", backgroundAttachment: "scroll", backgroundSize: "contain", backgroundPosition: "left top", width: "400px", height:"300px"}} />
                <div className="col s-4" style={{backgroundImage: `url(${savedImages.image3})`,backgroundRepeat:"no-repeat", backgroundAttachment: "scroll", backgroundSize: "contain", backgroundPosition: "left top", width: "400px", height:"300px"}} />
                <div className="col s-4" style={{backgroundImage: `url(${savedImages.image4})`,backgroundRepeat:"no-repeat", backgroundAttachment: "scroll", backgroundSize: "contain", backgroundPosition: "left top", width: "400px", height:"300px"}} />
                <div className="col s-4" style={{backgroundImage: `url(${savedImages.image5})`,backgroundRepeat:"no-repeat", backgroundAttachment: "scroll", backgroundSize: "contain", backgroundPosition: "left top", width: "400px", height:"300px"}} /> 
       
            </div>
            }
        </div>
        </div>
    )
}