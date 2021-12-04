//take the information we get back from googleOauth and create a new user in our database
//if we already have that user, we will update the user profile with the data

import { getDbConnection } from '../src/db.mjs';

export const updateOrCreateUserFromOauth = async ({oauthUserInfo}) => {
    const {
        id: googleId,
        verified_email: isVerified,
        email: userName,
        given_name: firstName,
        family_name: lastName,
        picture,
    } = oauthUserInfo;
    
    const db = getDbConnection('running-log');
    const exisitingUser = await db.collection('users').findOne({userName});
   

    if(exisitingUser){
        const result = await db.collection('users').findOneAndUpdate(
            {userName},
            {$set: {googleId, isVerified,firstName,lastName,picture}},
            {returnOriginal: false},
        );

        return result.value;
    }else {
        const result = await db.collection('users').inserOne({
            userName,
            googleId,
            isVerified,
            firstName,
            lastName,
            picture,
        });
        return result.ops[0];
    }
}