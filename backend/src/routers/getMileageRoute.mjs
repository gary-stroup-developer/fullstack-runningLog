import { getDbConnection } from "../db.mjs";

export const getMileageRoute = {
    path: '/api/getMileage',
    method: 'get',
    handler: async (req,res) => {
        const {id} = req.body;

        const db = getDbConnection('running-log');
        const user = await db.collection('user').findOne({_id:ObjectID(id)},{"raceResults":1});
        const posts = await db.collection(`${id}`).find({},{"distance":1,"title":1});

        const raceResults = [];
        await user.forEach((result) => {
            return raceResults.push(result);
        });

        const totalMiles = 0;
        await posts.forEach((result) => {
            totalMiles+=result.distance;
        });

        const weeklyMiles = 0;
        const weeklyData = await posts.filter(post => {
            
        })

    }
}