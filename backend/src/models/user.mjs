import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from "../db.mjs";



  export const userSchema = new mongoose.Schema( {
        firstName: 'String',
        lastName: 'String',
        userName: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            validate: (value) => {
                if(!validator.isEmail(value)) {
                    throw new Error('username must be an email');
                }
            }
        },
        password: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            minlength: [8,'password must be at least 8 characters in length'],
            validate: (value) => {
                if(value.includes('password')){
                    throw new Error('the password cannot contain the word password')
                }
            }
        },
        tokens:[{
            token: 'String'
        }],
        isVerified: {type: Boolean},
        verificationString: 'String'
    });

    //create a token for the user
    userSchema.methods.createToken = async function() {
        const user = this;

        jwt.sign({id:user._id,userName:user.userName, name: user.firstName},process.env.JWT_SECRET,{expiresIn:'2d'},(err,token) => {
            if(err){
                return;
            }
             //append the token to the user
            user.tokens = user.tokens.concat({token});
            
        });
        await user.save();
    }


    //before saving the user, hash the password
    userSchema.pre('save',async function(next){
        const user = this;

        if (user.isModified('password')) {

            user.password = await bcrypt.hash(user.password,10);
        }

        next()
    });

   
