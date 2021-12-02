import ObjectID from 'mongodb';
import { getDbConnection } from '../db.mjs';

export const getLogbookEntries = {
    path: '/api/logbookentries/:userId',
    method: 'get',
    handler: async (req,res) => {
        const {userId:id} = req.params;

        
        const db = getDbConnection('running-log');
        const posts = await db.collection(`${id}`).find({id},{"title":1,"notes":1});
        if(!posts){
            return res.status(400).send('unable to get posts');
        }
        const data =[];
        await posts.forEach((val)=>data.push(val));
        
        return res.status(200).send(data);
    }
}