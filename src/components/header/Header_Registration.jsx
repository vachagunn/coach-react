import "./style.css"

import { NavLink } from "react-router-dom";

const Header_Registration = () => {
    return (
        <header className="page-header">
            <nav className="main-header-nav">
                <NavLink to='/' className="logo-link">
                    <h1 className="logo">Coach</h1>
                </NavLink>
            </nav>
        </header>);
}
 
export default Header_Registration;