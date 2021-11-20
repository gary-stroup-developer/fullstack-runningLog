import mongoose from 'mongoose';
import validator from 'validator';

export const createDBCollection = () => {
    const userSchema = new mongoose.Schema( {
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
        }
    })
};

export const initializeDBConnection = async () => {
    await mongoose.connect('mongodb://localhost:27017/running-log', {useNewUrlParser: true, useUnifiedTopology: true});
}