import './style.css'

const Footer = () => {
    return ( 
        <footer className="page-footer">
            <div className="page-footer-wrapper">
                <div className="page-footer-links">
                    <h2 className="page-footer-title">Coach</h2>
                    <ul className="links-list">
                        <li className="links-list-item">
                            <a href="#">Категории</a>
                        </li>
                        <li className="links-list-item">
                            <a href="#">Мобильная версия</a>
                        </li>
                    </ul>
                </div>
                <div className="contacts">
                    <p className="support">Служба поддержки:</p>
                    <a href="#">
                        <p className="tel">8 (953) 123-45-67</p>
                    </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;