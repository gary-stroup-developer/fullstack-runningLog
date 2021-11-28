import axios from 'axios';
import { useHistory } from 'react-router';
import { Navbar, Icon, NavItem,Dropdown, Divider } from "react-materialize";
import circle from '../images/circle.png';

export const NavbarComponent = (props) => {
    const history = useHistory();
    const LogoutUser = () => {
        const response = axios.put('/api/logout',{userName:props.username});
        
    
        // We'll want to log the user out here
        // and send them to the "login page"
        localStorage.removeItem('token');
        history.push('/login');

    }
    return (
        <div>
            <Navbar
                className="orange"
                alignLinks="right"
                brand={<a className="brand-logo" href="/home" style={{paddingLeft:"10px"}}><div style={{display:"flex",width:"400px",alignItems:"center"}}> <img style={{width:"10%"}} src={circle}/> Running Log</div></a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                >
                <NavItem href="/home">
                    Home
                </NavItem>
                <NavItem href="/logbook">
                    LogBook
                </NavItem>
                <NavItem href='/training-guide'>
                    Training Guide
                </NavItem>
                <NavItem href='/vision-board'>
                    Vision Board
                </NavItem>
                <Dropdown
                    id="Dropdown_8"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: false,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<Icon style={{padding:"0 20px"}} small>person</Icon>}
                    >
                    <div style={{display: "flex", width: "300px",padding:"10px"}}>
                    <p>Name</p>
                    <p style={{marginLeft:"50px"}}>{props.name}</p>
                    </div>
                    <Divider />
                    <div style={{display: "flex", width: "300px",padding:"10px"}}>
                    <p>username</p>
                    <p style={{marginLeft: "25px"}}>{props.username}</p>
                    </div>
                    <Divider />
                    <div style={{display: "flex", width: "300px",padding:"10px"}} onClick={LogoutUser}>
                        Logout
                    </div>
                </Dropdown>
            </Navbar>
        </div>
    )
}