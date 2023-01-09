import "./style.css"

const Header = () => {
    return (
        <header className="page-header">
            <nav className="main-header-nav">
                <a href="#" className="logo-link">
                    <h1 className="logo">Coach</h1>
                </a>
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