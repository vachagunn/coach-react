import './style.css'

const Search = () => {
    return ( 
        <form className="search-block">
            <input className="search-input" type="text" placeholder="Поиск" />
            <a href="#" className="search-btn btn" type="button">Найти</a>
        </form>
     );
}
 
export default Search;