import {signUpRoute} from './signupRoute.mjs';
import { emailVerificationRoute } from './emailVerificationRoute.mjs';
import { forgotPasswordRoute } from './forgotPasswordRoute.mjs';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute.mjs';
import { googleOauthCallbackRoute } from './googleOauthCallbackRoute.mjs';
import { logInRoute } from './loginRoute.mjs';
import { logoutRoute } from './logoutRoute.mjs';
import { resetPasswordRoute } from './resetPasswordRoute.mjs';



export const routes = [
    emailVerificationRoute,
    forgotPasswordRoute,
    getGoogleOauthUrlRoute,
    googleOauthCallbackRoute,
    logInRoute,
    logoutRoute,
    resetPasswordRoute,
    signUpRoute,
]