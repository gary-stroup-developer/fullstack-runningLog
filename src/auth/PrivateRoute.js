import { useUser } from "./useUser";
import { Redirect, Route} from "react-router";


export const PrivateRoute = () => {

    const user = useUser();

    if(!user) return <Redirect to="/login" />

    return <Route/>
}