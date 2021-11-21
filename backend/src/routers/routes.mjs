import {signupRoute} from './signupRoute.mjs';
import { emailVerificationRoute } from './emailVerificationRoute.mjs';
import { forgotPasswordRoute } from './forgotPasswordRoute.mjs';
import { resetPasswordRoute } from './resetPasswordRoute.mjs';
export const routes = [
    emailVerificationRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    signupRoute,
]