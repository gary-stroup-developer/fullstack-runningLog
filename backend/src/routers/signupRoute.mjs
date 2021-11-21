import { User } from "../db.mjs";
import { sendEmail } from "../../utils/sendEmail.mjs";
import { v4 as uuid} from 'uuid';
import 'dotenv';

export const signupRoute = {
    path:'/api/signup',
    method: 'post',
    handler: async (req,res) => {
        const {userName,firstName, lastName, password} = req.body;

        const verificationString = uuid();

        //check if a user already exists...they should not
        const doesUserExist = await User.findOne({userName})
        if(doesUserExist) return res.status(400).json({"message":"a user with that email is already registered"});

        //create the user inside the database and register them a token
        // const user = await User.create({firstName, lastName, userName, password, isVerified: false, verificationString});
        const user = await User.create({firstName, lastName, userName, password, isVerified: false, verificationString});
        try {
           await user.save();
           await user.createToken();
           sendEmail({
            to: userName,
            from: process.env.SENDGRID_EMAIL,
            subject: 'Please verify your email',
            text: `
            Thanks for signing up! To verify your email, click here:
            http://localhost:3000/verify-email/${verificationString}
            `
        });
          
        }catch(err) {
            res.status(500).json({"message":"Something went wrong. Please try signing up again"});
        }
        await res.status(200).json({"token":user.tokens[0].token});
    }
}