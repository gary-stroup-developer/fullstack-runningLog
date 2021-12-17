import { getDbConnection } from "../db.mjs";
export const downloadImagesRoute = {
    path: '/api/download-images/:user',
    method: 'get',
    handler: async(req,res) => {
        const {user: userName} = req.params;
        const db = getDbConnection('running-log');
        const user = await db.collection('users').findOne({userName});

        if(!user) {
            res.sendStatus(400);
        }
        const title = user.visionBoard.title;
        const {image1, image2, image3, image4, image5} = user.visionBoard.images;
        const data = {title,image1, image2, image3, image4, image5};
        res.status(200).send(data);
    }
}