import { User } from "../db.mjs";
import jwt from 'jsonwebtoken';
import 'dotenv';

export const loginRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req,res) => {
        //get the email and password the user submitted
        const {userName, password} = req.body;

        //check if the user exists in the db
        
        try {
        const user = await User.login(userName,password);
        // const match = await bcrypt.compare(password, user.password);
        const {firstName, isVerified,_id:id} = user;
        jwt.sign({userName, firstName, isVerified, id},process.env.JWT_SECRET,{expiresIn: '2d'},(err, token) => {
            if(err) {
                res.status(500).send('unable to verify user at this time');
            }
            user.setToken(token);
            return res.status(200).json({token});    
        }); 
    }catch(err){
        return res.status(400).json({"message":"unable to verify user"});
    }
  
    }
}