import { getDbConnection } from "../db.mjs";
import 'dotenv';
import jwt from 'jsonwebtoken';


export const addEntryRoute = {
    path: '/api/logbookentry',
    method: 'post',
    handler: async (req,res) => {
        const {userName, courseValue, distance, time, notes,id} = req.body;
        const db = getDbConnection('running-log');
        await db.collection('posts').insertOne({
            id,
            courseValue,
            distance,
            time,
            notes
            });
         
            
            jwt.sign({id,userName,isVerified:true},process.env.JWT_SECRET,{expiresIn:'2d'},(err, token) => {
                if(err){
                    res.status(500).send('unable to send token');
                }
                res.status(200).json({token});
            })
         
    }
}