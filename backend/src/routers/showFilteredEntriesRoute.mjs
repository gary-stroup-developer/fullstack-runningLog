import { getDbConnection } from "../db.mjs";

export const showFilteredEntriesRoute = {
    path: 'api/filtered-entries/:id/:month/:year',
    method: 'get',
    handler: async (req,res) => {
        const {id, month, year} = req.params;


        //connect to the database
        const db = getDbConnection('running-log');


        //query for documents that have fields that match the month and the year
        //return the object with only the id, notes, and title fields
        const entries = await db.collection(`${id}`).find({month,year},{"id":1,"notes":1,"title":1});
        console.log(entries)

        //initialize the array where the filtered entries will be stored and sent back to the user
        const data = [];

        //entries query return a Promise or similar type of object. Use a forEach method to push each
        //entry object to the array
        await entries.forEach((entry) => data.push(entry));      
        
        //return the data back to the user
        res.status(200).json({data});

    }
}