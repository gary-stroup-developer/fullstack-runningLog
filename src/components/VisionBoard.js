import { NavbarComponent } from "./Navbar"
import { useUser } from "../auth/useUser"
export const VisionBoard = () => {
    const user = useUser();
    const {id, firstName, userName} = user;
    return (
        <div>
            <NavbarComponent name={firstName} username={userName} />
        </div>
    )
}