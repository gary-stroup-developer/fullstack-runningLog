import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { PrivateRoute } from "./auth/PrivateRoute";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path= '/home' render={() => <HomePage />} />
                <Route exact path = '/' render={()=><LandingPage />} />
                <Route exact path= '/login' render={()=><LoginPage />} />
                <Route exact path= '/signup' render={()=><SignUpPage />} />
            </Switch>
        </Router>
    )
}