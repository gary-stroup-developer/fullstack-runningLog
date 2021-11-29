// import mongoose from 'mongoose';
// import { userSchema } from './models/user.mjs';



// export const User = mongoose.model('User', userSchema);

// export const initializeDBConnection = async () => {
//     await mongoose.connect('mongodb://localhost:27017/running-log', {useNewUrlParser: true, useUnifiedTopology: true});
// }

import MongoClient from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}