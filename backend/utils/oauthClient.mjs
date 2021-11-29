//setup the google apis package that we just installed with the credentials from GCP
import {google} from 'googleapis';
import 'dotenv';

export const oauthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:8080/auth/google/callback',
);