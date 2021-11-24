import { User } from "../db.mjs";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv';

export const loginRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req,res) => {
        //get the email and password the user submitted
        const {userName, password} = req.body;

        //check if the user exists in the db
        const user = await User.findOne({userName});
        //compare the password entered with the user password stored in db
        //tried using await with bcrypt but gave errors so i used a .then method
        bcrypt.compare(password, user.password).then((err, result)=>{
            if(err){
                return res.status(500).json({"message":"server error. Login unsuccessful. Please try again"});
            }
            else {
                const {userName, firstName, isVerified, _id:id} = user;

                jwt.sign({userName, firstName, isVerified, id},process.env.JWT_SECRET,{expiresIn: '2d'},(err, token) => {
                    if(err) {
                        return res.status(500).send('unable to verify user at this time');
                    }
                    user.setToken(token);
                    return res.status(200).json({token});
                })

            }
        })
    }
}