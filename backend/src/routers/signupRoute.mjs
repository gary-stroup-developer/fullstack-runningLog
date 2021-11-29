//import { User } from "../db.mjs";
import { getDbConnection } from '../db.mjs';
import bcrypt from 'bcrypt';
import { sendEmail } from "../../utils/sendEmail.mjs";
import { v4 as uuid} from 'uuid';
import 'dotenv';
import jwt from 'jsonwebtoken';



// export const signupRoute = {
//     path:'/api/signup',
//     method: 'post',
//     handler: async (req,res) => {
//         const {userName,firstName, lastName, password} = req.body;

//         const verificationString = uuid();

//         //check if a user already exists...they should not
//         const doesUserExist = await User.findOne({userName})
//         if(doesUserExist) return res.status(400).json({"message":"a user with that email is already registered"});

//         //create the user inside the database and register them a token
//         User.create({firstName, lastName, userName, password, isVerified: false, verificationString}).then((user) => {
//                 jwt.sign({userName, firstName, isVerified:false, id:user._id},process.env.JWT_SECRET,{expiresIn: '2d'}, (err, token) => {
//                     if(err) {
//                         return res.status(400).json({"message":"Something went wrong. Please try signing up again"});
//                     }
//                     user.setToken(token);
//                     return res.status(200).json({token});
//                 });
           
//         });

//             try {
//                 //send verification email to user
//                 sendEmail({
//                     to: userName,
//                     from: process.env.SENDGRID_EMAIL,
//                     subject: 'Please verify your email',
//                     text: `
//                     Thanks for signing up! To verify your email, click here:
//                     http://localhost:3000/verify-email/${verificationString}
//                     `
//                 });
//             }catch(err) {
//                 return res.status(500).json({"message":"Something went wrong. Please try signing up again"});
//             }
        
//     }
// }

export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        const { userName, password,firstName,lastName} = req.body;

        const db = getDbConnection('running-log');
        const user = await db.collection('users').findOne({userName});

        if (user) {
            res.sendStatus(409);
        }

        const passwordHash = await bcrypt.hash(password, 10);

        //create a unique id for the verification of email & add it to field inside the user collection
        const verificationString = uuid();

        const result = await db.collection('users').insertOne({
            userName,
            passwordHash,
            isVerified: false,
            verificationString,
            firstName,
            lastName,
        });

        const {insertedId} = result;

        //send verification email
        try {
            await sendEmail({
                to: userName,
                from: process.env.SENDGRID_EMAIL,
                subject: 'Please verify your email',
                text: `
                Thanks for signing up! To verify your email, click here:
                http://localhost:3000/verify-email/${verificationString}
                `
            });
        } catch(e) {
            console.log({error:e});
            res.sendStatus(500);
        }

        jwt.sign({
            id: insertedId,
            userName,
            isVerified: false,
            firstName,
        }, process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err, token) => {
            if(err) {
                return res.status(500).send(err);
            }
            res.status(200).json({token});
        }
        );
    }
}