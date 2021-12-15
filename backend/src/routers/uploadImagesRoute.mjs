import { getDbConnection } from '../db.mjs'; 

export const uploadImagesRoute = {
    path: '/api/upload-images',
    method: 'post',
    handler: async (req,res) => {
        const {userName,id,visionTitle, images} = req.body;

        const db = getDbConnection('running-log');
        const user = await db.collection('users').findOneAndUpdate(
            {userName},
            {$set: {visionBoard: {title: visionTitle, images}}},
            {returnOriginal: false}
            );
        if(!user) {
            res.json({"message":"unable to store the visio board data. This is a server issue and we will work to correct the issue."});
        }

        res.json({"message":"Vision Board was successfully stored in the database!"})

    }
}