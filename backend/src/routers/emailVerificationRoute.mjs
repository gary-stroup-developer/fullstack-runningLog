import { User } from "../db.mjs";
import { ObjectId } from "mongodb";
import jwt from 'jsonwebtoken';
import 'dotenv';

export const emailVerificationRoute =  {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req,res) => {

        //get the verification string and check the db for the user with that string
        const {verificationString} = req.body;
        const result = await User.findOne({verificationString});
        if(!result) return res.status(401).json({message: 'The email verification code is incorrect'});

        const {_id: id, userName, firstName } = result;
        
       
            const user = await User.findOneAndUpdate({verificationString},{
                verificationString: '',
                isVerified: true
            },{new:true});
            
            
            //destructure the user and create the data for the token
      
                const tokenData = {userName, id, firstName, isVerified: true};
                jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn: '2d'},(err, token)=>{
                    if(err) {
                    return res.sendStatus(500);
                    }
                    else{
                        res.status(200).json({token});
                    }
                    
                })
          
    }
}