import { getDbConnection } from "../db.mjs";
import {ObjectID} from 'mongodb';

export const addRaceResultsRoute = {
    path: '/api/race-results',
    method: 'post',
    handler: async (req,res) => {
        const {id,dateValue, raceNameValue, resultValue} = req.body;
        const db = getDbConnection('running-log');

        const result = await db.collection('users').findOneAndUpdate(
            {_id: ObjectID(id)},
            {$push:{raceResults:{date:dateValue,name: raceNameValue, time:resultValue}}},
            {returnOriginal: false},
        );

        if(!result) {
            return res.sendStatus(404);
        }

        return res.sendStatus(200);
    }
}