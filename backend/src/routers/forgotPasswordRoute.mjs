import { User } from "../db.mjs";
import { sendEmail } from "../../utils/sendEmail.mjs";
import { v4 as uuid} from 'uuid';
import 'dotenv';

export const forgotPasswordRoute = {
    path: '/api/forgot-password',
    method: 'post',
    handler: async (req,res) => {
        const {userName} = req.body;
        const verificationString = uuid();

        //update the user info to hold new verification string
        const user = await User.findOneAndUpdate({userName},{verificationString: verificationString});

        try {
            sendEmail({
                to: userName,
                from: process.env.SENDGRID_EMAIL,
                subject: 'Running Log: Reset your password',
                text: `Please click the following link to reset your password:
                http://localhost:3000/reset-password/${verificationString}
                `
            });

            return res.status(200).json({"message":"Reset link was successful. Check your email to complete the reset password process "});

        }catch(err){
            return res.status(400).json({"message":"Something went wrong. Try to reset password again"});
        }
    }
}