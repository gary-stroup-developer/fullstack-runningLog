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
        try {
            const result = await db.collection('users').findOneAndUpdate({verificationString},
                {
                    $set:{verificationString: '',isVerified: true,}
                },{returnOriginal: false});
            res.status(200).json({"message":"Email verification was a success!! Please login with your username and password"})
        }catch(err) {
            res.status(500).json({"message":"email verification failed. Please try clicking the link or signing up again."})
        }

    }
}