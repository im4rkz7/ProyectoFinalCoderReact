import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom"
import logo from '../assets/logo.png';

const NavBar = () => {

    return (
        <>

            
            <Nav className="justify-content-center navbar"  activeKey="/home">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>

                <NavItem style={{padding:"10px"}}>
                    <NavLink to="/categoria/balanceado" className={({ isActive }) =>
                isActive ? "active" : undefined}>
                        <h2>BALANCEADO</h2>
                    </NavLink>
                </NavItem>

                <NavItem style={{padding:"10px"}}>
                    <NavLink to="/categoria/pate" className={({ isActive }) =>
                isActive ? "active" : undefined}>
                        <h2>PATE</h2>
                    </NavLink>
                </NavItem>

                <NavItem style={{padding:"10px"}}>
                    <NavLink to="/categoria/complemento" className={({ isActive }) =>
                isActive ? "active" : undefined}>
                        <h2>COMPLEMENTOS</h2>
                    </NavLink>
                </NavItem>

                <NavItem style={{padding:"10px"}}>
                    <NavLink to="/categoria/juguete" className={({ isActive }) =>
                isActive ? "active" : undefined}>
                        <h2>JUGUETES</h2>
                    </NavLink>
                </NavItem>
                
                <NavItem>
                        <Link to="/cart"><CartWidget/></Link>
                </NavItem>
                
                </Nav>
                
        </>
    )
}

export default NavBar