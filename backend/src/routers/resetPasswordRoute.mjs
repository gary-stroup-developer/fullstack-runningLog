import { User } from "../db.mjs";
import bcrypt from 'bcrypt';

export const resetPasswordRoute = {
    path: '/api/reset-password',
    method: 'put',
    handler: async (req,res) => {
        //get the new password and verificationString
        const {password, verificationString} = req.body;
        const hash = bcrypt.hashSync(password, 10);
        const user = await User.findOneAndUpdate({verificationString}, {
            password: hash,
            verificationString: '',
        }, {new: true});

        if(user) {
           return res.status(200).json({"message":"password was reset successfully. Login with your new password"}); 
        }
        else {
            return res.status(404).json({"message":"password was nnot reset. Please try resetting your password again"}); 
        }
    
    }
}