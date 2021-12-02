import ObjectID from 'mongodb';
import { getDbConnection } from '../db.mjs';

export const getLogbookEntries = {
    path: '/api/logbookentries/:userId',
    method: 'get',
    handler: async (req,res) => {
        const id = req.params.userId;
        const db = getDbConnection('running-log');
        try{
        const posts = await db.collection('posts').find({_id:ObjectID(id)});

        if(posts == undefined){
            return res.status(200).send(null);
        }

        return res.status(200).send(posts);
    }catch(err) {
        return res.status(400).send([{title:'No posts available', entry:'enter your first post'}]);
    }
    }
}