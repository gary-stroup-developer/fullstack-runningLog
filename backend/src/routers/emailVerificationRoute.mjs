import { User } from "../db.mjs";
import jwt from 'jsonwebtoken';
import 'dotenv';

export const emailVerificationRoute =  {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req,res) => {

        //get the verification string and check the db for the user with that string
        const {verificationString} = req.body;
        try{
        const user = await User.findOneAndUpdate({verificationString:verificationString},{
            verificationString: '',
            isVerified: true
        },{new:true},(err,doc) => {
            if(err) {
                res.status(400).json({"message":err.message});
            }
            return doc;
        });
        //destructure the user and create the data for the token
        const {userName, firstName, isVerified} = user;
        const tokenData = {userName, firstName, isVerified};
        jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn: '2d'},(err, token)=>{
            if(err){
                return res.status(500).json({"message":err.message,"userName":userName});
            }
            res.status(200).json({"token":token,"userName":userName});
        })
            
    } catch(err){
        res.status(400).json({"message":err.message});
    }
    }
}