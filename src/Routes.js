import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { PrivateRoute } from "./auth/PrivateRoute";
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';
import { EmailVerificationLandingPage } from "./pages/EmailVerificationLandingPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { ResetPasswordLandingPage } from "./pages/ResetPasswordLandingPage";
import { Logbook } from "./components/Logbook";
import { LogBookEntry } from "./components/LogBookEntry";
import { TrainingGuide } from "./components/TrainingGuide";
import { VisionBoard } from "./components/VisionBoard";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/' render={() =><LandingPage />} />
                <Route exact path = '/login' render={() =><LoginPage />} />
                <Route exact path = '/signup' render={() =><SignUpPage />} />
                <Route exact path = '/please-verify' render={() =><PleaseVerifyEmailPage />} />
                <Route exact path = '/verify-email/:verificationString' render={() => <EmailVerificationLandingPage />} />
                <Route exact path = '/forgot-password/' render={() => <ForgotPasswordPage />} />
                <Route exact path = '/reset-password/:verificationString' render={() => <ResetPasswordLandingPage />} />
                <PrivateRoute exact path= '/home' render={() => <HomePage />} />
                <PrivateRoute exact path = '/logbook' render ={() => <Logbook />} />
                <PrivateRoute exact path = '/logbook/article/:id' render = {() => <LogBookEntry />} />
                <PrivateRoute exact path = '/training-guide' render = {() => <TrainingGuide />} />
                <PrivateRoute exact path = '/vision-board' render = {() => <VisionBoard />} />
            </Switch>
        </Router>
    )
}