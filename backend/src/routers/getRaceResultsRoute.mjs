import { getDbConnection } from "../db.mjs";

export const getRaceResultsRoute = {
    path: '/api/get-race-results/:userName',
    method: 'get',
    handler: async (req,res) => {
        const {userName} = req.params;
        

        const db = getDbConnection('running-log');
        const user = await db.collection('users').findOne({userName});
       
        const raceResults = [];
 

       try{
        
        user.raceResults.forEach((result) => {
            raceResults.push(result);
        });
        
        res.status(200).send(raceResults);
        
        }catch(err){
            res.status(400).send(err.message);
        }
    }
}