import {signupRoute} from './signupRoute.mjs';
import { emailVerificationRoute } from './emailVerificationRoute.mjs';
import { forgotPasswordRoute } from './forgotPasswordRoute.mjs';
import { loginRoute } from './loginRoute.mjs';
import { logoutRoute } from './logoutRoute.mjs';
import { resetPasswordRoute } from './resetPasswordRoute.mjs';
export const routes = [
    emailVerificationRoute,
    forgotPasswordRoute,
    loginRoute,
    logoutRoute,
    resetPasswordRoute,
    signupRoute,
]