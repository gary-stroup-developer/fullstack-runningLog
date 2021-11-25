import { User } from "../db.mjs";
import jwt from 'jsonwebtoken';
import 'dotenv';
export const logoutRoute = {
    path: '/api/logout',
    method: 'put',
    handler: async (req,res) => {
        const {userName} = req.body;

        const user = await User.findOneAndUpdate({userName},{tokens:[]});
        
        if(user) {
            try {
            jwt.sign({userName:user.userName, id: user._id,firstName: user.firstName, isVerfied: false},process.env.JWT_SECRET,{expiresIn:'2d'},(err,token) => {
                if(err) {
                    return res.status(400).json({"message":"could not logout properly"});
                }
                return res.status(200).json({token});
            })
        }catch(err) {
            return res.status(400).send(err.message);
        }
        }
        
    }
}