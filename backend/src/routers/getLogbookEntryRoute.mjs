import { getDbConnection } from '../db.mjs';

export const getLogbookEntryRoute = {
    path: '/api/logbook/article/:id',
    method: 'get',
    handler: async(req,res) => {
        const {id} = req.params;
       
        const db = getDbConnection('running-log');

        try {
            
        const entry = await db.collection(`${id}`).findOne({id},{"title":1,"distance":1,"time":1,"notes":1});
        const data = {...entry};
        res.status(200).json({data});
       
    }catch(err){
        console.log(err.message);
    }
    }
}