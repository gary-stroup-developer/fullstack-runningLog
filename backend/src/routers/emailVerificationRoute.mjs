import { getDbConnection } from "../db.mjs";
import jwt from 'jsonwebtoken';
import 'dotenv';

export const emailVerificationRoute =  {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req,res) => {

        //get the verification string and check the db for the user with that string
        const {verificationString} = req.body;
        const db = getDbConnection('running-log');
        const user = await db.collection('users').findOneAndUpdate({verificationString},
            {
                $set:{verificationString: '',isVerified: true,}
            },{returnOriginal: false});

        
        //if user was found, create the data for the token and send back to the frontend
        if(user) {
            try {
                const tokenData = {userName:user.userName, id:user._id, firstName: user.firstName, isVerified: true};
                jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
                    if (err) {
                        return res.status(500).json({"message":"email could not be verified. Please try again"});
                    }
                    else {
                        return res.status(200).send({ token });
                    }
                });
            }catch(err){
                res.status(500).json({"message":err.message});
            }
        }  
    }
}