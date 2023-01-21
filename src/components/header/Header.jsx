import { NavLink } from "react-router-dom";

import "./style.css"

import { sortCities } from "../../scripts/sortCities";

const Header = () => {
    return (
        <header className="page-header">
            <nav className="main-header-nav">
                <NavLink to="/" className="logo-link">
                    <h1 className="logo">Coach</h1>
                </NavLink>
                <div className="select-wrapper">
                    <select name="select-city" className="select" onClick={sortCities}>
                        <option value={1} selected>Екатеринбург</option>
                        <option value={2}>Тюмень</option>
                        <option value={3}>Челябинск</option>
                        <option value={4}>Первоуральск</option>
                        <option value={5}>Нижний Тагил</option>
                    </select>
                </div>
                <NavLink to="/authorization" className="sign-in_link">Войти</NavLink>
            </nav>
        </header>);
}
 
export default Header;