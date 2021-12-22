//import { User } from "../db.mjs";
import { getDbConnection } from '../db.mjs';
import bcrypt from 'bcrypt';
import { sendEmail } from "../../utils/sendEmail.mjs";
import { v4 as uuid} from 'uuid';
import 'dotenv';
import jwt from 'jsonwebtoken';


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
                sendEmail({
                to: userName,
                from: process.env.SENDGRID_EMAIL,
                subject: 'Please verify your email',
                text: `
                Thanks for signing up! To verify your email, click here:
                http://localhost:3000/verify-email/${verificationString}
                `
            });

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
            });
        } catch(e) {
            console.log({error:e});
            res.sendStatus(500);
        }

    
    }
}