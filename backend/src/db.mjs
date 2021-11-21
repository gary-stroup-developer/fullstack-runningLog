import mongoose from 'mongoose';
import { userSchema } from './models/user.mjs';



export const User = mongoose.model('User', userSchema);

export const initializeDBConnection = async () => {
    await mongoose.connect('mongodb://localhost:27017/running-log', {useNewUrlParser: true, useUnifiedTopology: true});
}