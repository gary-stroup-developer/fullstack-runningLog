import { User } from "../db.mjs";
import { sendEmail } from "../../utils/sendEmail.mjs";
import { v4 as uuid} from 'uuid';
import 'dotenv';
import jwt from 'jsonwebtoken';


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
        const user = await User.create({firstName, lastName, userName, password, isVerified: false, verificationString});
        if(user) {
            try {
                //send verification email to user
                sendEmail({
                    to: userName,
                    from: process.env.SENDGRID_EMAIL,
                    subject: 'Please verify your email',
                    text: `
                    Thanks for signing up! To verify your email, click here:
                    http://localhost:3000/verify-email/${verificationString}
                    `
                });

            jwt.sign({userName, firstName, isVerified:false, id:user._id},process.env.JWT_SECRET,{expiresIn: '2d'}, (err, token) => {
                if(err) {
                    return res.status(400).json({"message":"Something went wrong. Please try signing up again"});
                }
                user.setToken(token);
                return res.status(200).json({token});
            });
            //user.createToken();

            }catch(err) {
                return res.status(500).json({"message":"Something went wrong. Please try signing up again"});
            }
        }
        
    }
}