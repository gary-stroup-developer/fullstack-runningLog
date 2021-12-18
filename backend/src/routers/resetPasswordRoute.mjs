//import { User } from "../db.mjs";
import { getDbConnection } from '../db.mjs';
import bcrypt from 'bcrypt';


export const resetPasswordRoute = {
    path: '/api/reset-password',
    method: 'put',
    handler: async (req,res) => {
        //get the new password and verificationString
        const {password, verificationString} = req.body;
        
        const hash = await bcrypt.hash(password,10);
    
        const db = getDbConnection('running-log');
        const user = await db.collection('users').updateOne({verificationString},{$set: {
            passwordHash: hash,
            verificationString: '',
        }});

        if(!user){
            return res.status(400).json({"message":'unable to reset'});
        }
       
        return res.status(200).json({"message":"password was reset successfully. Login with your new password"}); 

    
    }
}