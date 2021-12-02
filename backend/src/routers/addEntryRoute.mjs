import { getDbConnection } from "../db.mjs";
import 'dotenv';
import jwt from 'jsonwebtoken';


export const addEntryRoute = {
    path: '/api/logbookentry',
    method: 'post',
    handler: async (req,res) => {
        const {userName, courseValue, distance, time, title, notes,id} = req.body;
        const db = getDbConnection('running-log');

        const result = await db.collection(`${id}`).insertOne({
            id,
            courseValue,
            distance,
            time,
            title,
            notes
            });
         
            
        jwt.sign({postId:result.insertedId,id,userName,isVerified:true},process.env.JWT_SECRET,{expiresIn:'2d'},(err, token) => {
            if(err){
                res.status(500).send('unable to send token');
            }
            return res.status(200).json({token});
        });
            
    }
}