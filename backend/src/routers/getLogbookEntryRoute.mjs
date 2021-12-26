import { getDbConnection } from '../db.mjs';

export const getLogbookEntryRoute = {
    path: '/api/logbook/article/:id/:userTitle',
    method: 'get',
    handler: async(req,res) => {
        const {id, userTitle:title} = req.params;
       
        const db = getDbConnection('running-log');

        try {
            
        const entry = await db.collection(`${id}`).findOne({title},{"title":1,"distance":1,"time":1,"notes":1});
        const data = {...entry};
        res.status(200).json({data});
       
    }catch(err){
        console.log(err.message);
    }
    }
}