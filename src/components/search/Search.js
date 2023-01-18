import React, { useEffect, useState } from "react";

import './style.css'


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return ( 
        <form className="search-block">
            <input
                className="search-input"
                value={searchTerm} 
                type="text" 
                autoFocus 
                autoComplete="off" 
                placeholder="Поиск"
                onChange={(e) => setSearchTerm()} 
            />
            <a href="#" className="search-btn btn" type="button">Найти</a>
        </form>
     );
}
 
export default Search;