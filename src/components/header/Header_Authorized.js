import "./style.css"

import profile_avatar from './../../img/profile.svg'
import { NavLink } from "react-router-dom";

const Header_Authorized = () => {
    return (
        <header className="page-header">
            <nav className="main-header-nav">
                <NavLink to='/' className="logo-link">
                    <h1 className="logo">Coach</h1>
                </NavLink>
                <div className="select-wrapper">
                    <select name="select-category" className="select" id="">
                        <option value="1">Екатеринбург</option>
                        <option value="2">Челябинск</option>
                        <option value="3">Тюмень</option>
                    </select>
                </div>
                <div href="#" className="profile">
                    <img src={profile_avatar} width="30" height="30" alt="Профиль" />
                    <select className="profile__name">
                        <option value={1} className="profile__name hidden">Профиль</option>
                        <option value={2}>Расписание</option>
                        <option value={3}>Настройки</option>
                        <option value={4}>Выход</option>
                    </select>
                </div>
            </nav>
        </header>);
}
 
export default Header_Authorized;