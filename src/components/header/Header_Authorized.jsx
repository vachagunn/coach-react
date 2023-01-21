import "./style.css"

import { NavLink } from "react-router-dom";
import { sortCities } from "../../scripts/sortCities";

const Header_Authorized = () => {
    return (
        <header className="page-header">
            <nav className="main-header-nav">
                <NavLink to='/' className="logo-link">
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
                <div href="#" className="profile">
                    <img src={profile_avatar} width="30" height="30" alt="Профиль" />
                    <select name="select-profile-option" className="profile__name select">Вачик
                        <option value={1}>Профиль</option>
                        <option value={2} disabled>Расписание</option>
                        <option value={3}>Выход</option>
                    </select>
                </div>
            </nav>
        </header>);
}
 
export default Header_Authorized;