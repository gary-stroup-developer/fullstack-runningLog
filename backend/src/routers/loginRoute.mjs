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
        const user = await User.find({userName});

        //if user doesn't exist send back an error message
        // if(!user) {
        //     return res.status(400).send({"message":"user could not be found. Please try again"});
        // }
        if(user){
        //use a try/catch block to verify user and send back token
            try {
                //user exists, verify if the password the user submitted matches what's in the db
                const isUser = await bcrypt.compare(password, user.password);

                //if password matches then generate a token for the user
                if(isUser) {
                    //destructure the user info
                    const {userName, firstName, isVerified, _id:id} = user;

                    jwt.sign({userName, firstName, isVerified, id},process.env.JWT_SECRET,{expiresIn: '2d'},(err, token) => {
                        if(err) {
                            return res.status(500).send('unable to verify user at this time');
                        }
                        user.setToken(token);
                        return res.status(200).json({token});
                    })
                }
            }catch(err) {
                return res.status(500).json({"message":"server error. Login unsuccessful. Please try again"});
            }
        }
    }
}