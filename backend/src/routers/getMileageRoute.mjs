import { getDbConnection } from "../db.mjs";

export const getMileageRoute = {
    path: '/api/getMileage/:id',
    method: 'get',
    handler: async (req,res) => {
        const {id} = req.params;
        
        //get the current date and subtract 7 days to get beginning of week
        //for the weekly total miles calc
        const beginningOfWeek = new Date(Date.now());
        const min = beginningOfWeek.setDate(beginningOfWeek.getDate()-7);
        

        const db = getDbConnection('running-log');
        
        const posts = await db.collection(`${id}`).find({},{"distance":1,"title":1});
      
        let totalMilesResult = 0;
        let weeklyMilesResult = 0;

       try{

        await posts.forEach((result) => {
            totalMilesResult+=Number(result.distance);
        });

    
        await posts.forEach((data) => {
            let test = new Date(data.title);
            if(test.getTime() > min){
            weeklyMilesResult+=Number(data.distance);
            }
        })
    
        res.status(200).json({totalMilesResult,weeklyMilesResult});
        
        }catch(err){
            res.sendStatus(400);
        }
    }
}