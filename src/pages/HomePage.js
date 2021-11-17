import axios from 'axios';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { useUser } from '../auth/useUser';


export const HomePage = () => {
    const user = useUser();
    const {email, name, isVerified, posts} = user;

    
    return (
        <div>
        {isVerified? 
        (
            <div>
                <h1>Home Page</h1>
                <p>Welcome {name} to the running app! Login in your first post</p>
            </div>
        ):<div>
            <p>Please check email to finish the verification process to access the app features</p>
        </div>
        }
        </div>
    )
}