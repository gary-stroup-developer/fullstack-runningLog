import { addEntryRoute } from './addEntryRoute.mjs';
import { addRaceResultsRoute } from './addRaceResultsRoute.mjs';
import { emailVerificationRoute } from './emailVerificationRoute.mjs';
import { forgotPasswordRoute } from './forgotPasswordRoute.mjs';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute.mjs';
import { downloadImagesRoute } from './downloadImagesRoute.mjs';
import { getLogbookEntries } from './getLogbookEntries.mjs';
import { getLogbookEntryRoute } from './getLogbookEntryRoute.mjs';
import { getMileageRoute } from './getMileageRoute.mjs';
import { getRaceResultsRoute } from './getRaceResultsRoute.mjs';
import { googleOauthCallbackRoute } from './googleOauthCallbackRoute.mjs';
import { logInRoute } from './loginRoute.mjs';
import { logoutRoute } from './logoutRoute.mjs';
import { resetPasswordRoute } from './resetPasswordRoute.mjs';
import {signUpRoute} from './signupRoute.mjs';
import { showFilteredEntriesRoute } from './showFilteredEntriesRoute.mjs';
import { uploadImagesRoute } from './uploadImagesRoute.mjs';



export const routes = [
    addEntryRoute,
    addRaceResultsRoute,
    downloadImagesRoute,
    emailVerificationRoute,
    forgotPasswordRoute,
    getGoogleOauthUrlRoute,
    getLogbookEntries,
    getLogbookEntryRoute,
    getMileageRoute,
    getRaceResultsRoute,
    googleOauthCallbackRoute,
    logInRoute,
    logoutRoute,
    resetPasswordRoute,
    signUpRoute,
    showFilteredEntriesRoute,
    uploadImagesRoute,
]