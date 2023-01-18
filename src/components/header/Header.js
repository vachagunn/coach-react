import { NavLink } from "react-router-dom";

import "./style.css"

const Header = () => {
    return (
        <header className="page-header">
            <nav className="main-header-nav">
                <NavLink to="/" className="logo-link">
                    <h1 className="logo">Coach</h1>
                </NavLink>
                <div className="select-wrapper">
                    <select name="select-category" className="select" id="">
                        <option value="1">Екатеринбург</option>
                        <option value="2">Челябинск</option>
                        <option value="3">Тюмень</option>
                    </select>
                </div>
                <a href="#" className="sign-in_link">Войти</a>
            </nav>
        </header>);
}
 
export default Header;