import { getDbConnection } from "../db.mjs";
export const downloadImagesRoute = {
    path: '/api/download-images/:user',
    method: 'get',
    handler: async(req,res) => {
        const {user: userName} = req.params;
        const db = getDbConnection('running-log');
        try {
        const user = await db.collection('users').findOne({userName});

        if(!user) {
            console.log('no user data available yet')
        }
        const title = user.visionBoard.title;
        const {image1, image2, image3, image4, image5} = user.visionBoard.images;
        const data = {title,image1, image2, image3, image4, image5};
        res.status(200).send(data);
    }catch(err){
        console.log('no user data available yet')
    }
    }
}