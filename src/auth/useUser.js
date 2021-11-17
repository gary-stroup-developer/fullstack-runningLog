import {useToken} from './useToken';
import { useEffect, useState } from 'react';


export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = (token)=>{
        const encodedPayload = token.split('.')[1];
        const decodedToken = atob(encodedPayload);
        return JSON.parse(decodedToken);
    }

    const [user, setUser] = useState(() => {
        if(!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(()=> {
        if(!token) {
            setUser(null)
        } else {
            setUser(getPayloadFromToken(token));
        }
    },[token]);

    return user;
}