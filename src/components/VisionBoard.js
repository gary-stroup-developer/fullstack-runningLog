import { useState, useEffect } from "react";
import { NavbarComponent } from "./Navbar";
import { useUser } from "../auth/useUser";
import { Button, TextInput } from "react-materialize";
import axios from 'axios';

export const VisionBoard = () => {

    //create an array to hold the images retrieved from db
    const savedImages = [];

    //initialize the state variables
    const [visionTitle, setVisionTitle] = useState('');
    const [images, setImage] = useState({image1:'',image2: '',image3:'',image4:'',image5:''});

    const [message, setMessage] = useState('');

    //get the user data
    const user = useUser();
    const {id, firstName, userName} = user;

    const uploadImages = async () => {
        const response = await axios.post('/api/upload-images',{userName,id,visionTitle, images});
        const message = response.data;
        setMessage(message);
        setImage({...images,image1:'',image2: '',image3:'',image4:'',image5:''});
    
        setTimeout(()=> {
            setMessage('');
        },3000);
    };

    useEffect(()=> {
        const getVision = async() => {
        const response = await axios.get('/api/download-mages');
        const {title, image1, image2, image3, image4, image5} = response.data;
        setVisionTitle(title);
        savedImages = [...savedImages,image1, image2, image3, image4, image5];
        }

        getVision();
    },[]);

    const setImages = (e) => {
        const [name, value] = e.target;
        setImage({...images,[name]:value});
    }
    
    return (
        <div>
            <NavbarComponent name={firstName} username={userName} />
            <h3>Vision Board</h3>
            
            {Object.keys(images).length === 0 ? 
            <div>
            <p>Get Started with creating your vision of the future!</p>
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
            {   savedImages.forEach((img) => {
                <div className="col" style={{background: `url(${img}) left top no-repeat cover`}} />
            })
                
            }
            </div>
            }
        </div>
    )
}