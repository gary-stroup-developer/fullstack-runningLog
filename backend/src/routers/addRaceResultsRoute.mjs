import { getDbConnection } from "../db.mjs";


export const addRaceResultsRoute = {
    path: '/api/race-results',
    method: 'post',
    handler: async (req,res) => {
        const {userName,date, name, time} = req.body;
        const data = {date, name, time};
        const db = getDbConnection('running-log');

        const result = await db.collection('users').findOneAndUpdate(
            {userName},
            {$push:{raceResults:data}},
            {returnOriginal: false},
        );
    
        if(!result) {
            return res.sendStatus(404);
        }

        return res.sendStatus(200);
    }
}