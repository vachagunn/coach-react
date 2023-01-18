import { NavLink } from 'react-router-dom';
import './style.css'

const Footer = () => {
    return ( 
        <footer className="page-footer">
            <div className="page-footer-wrapper">
                <div className="page-footer-links">
                    <NavLink to="/">
                        <h2 className="page-footer-title">Coach</h2>
                    </NavLink>
                    <ul className="links-list">
                        <li className="links-list-item">
                            <a href="#t1">Категории</a>
                        </li>
                        <li className="links-list-item">
                            <a href="#t2">Тренера</a>
                        </li>
                        <li className="links-list-item">
                            <a href="#">Мобильная версия</a>
                        </li>
                    </ul>
                </div>
                <div className="contacts">
                    <p>Дата обновления: <span className="accent">18.01.2023</span></p>
                    <p>Версия: <span className="accent">1.0.0</span></p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;