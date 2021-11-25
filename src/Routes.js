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
import { TrainingGuide } from "./components/TrainingGuide";
import { VisionBoard } from "./components/VisionBoard";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path= '/home' render={(routeProps) => <HomePage />} />
                <Route exact path = '/' render={(routeProps) =><LandingPage />} />
                <Route exact path = '/login' render={(routeProps) =><LoginPage />} />
                <Route exact path = '/signup' render={(routeProps) =><SignUpPage />} />
                <Route exact path = '/please-verify' render={(routeProps) =><PleaseVerifyEmailPage />} />
                <Route path = '/verify-email/:verificationString' render={(routeProps) => <EmailVerificationLandingPage />} />
                <Route exact path = '/forgot-password/' render={(routeProps) => <ForgotPasswordPage />} />
                <Route exact path = '/reset-password/:verificationString' render={(routeProps) => <ResetPasswordLandingPage />} />
                <Route exact path = '/logbook' render ={() => <Logbook />} />
                <Route exact path = '/training-guide' render = {() => <TrainingGuide />} />
                <Route exact path = '/vision-board' render = {() => <VisionBoard />} />
            </Switch>
        </Router>
    )
}