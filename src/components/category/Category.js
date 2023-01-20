import { NavLink } from 'react-router-dom';

import './style.css'

const Category = (props) => {
    return (
            <li className="categories-list-item">
                <NavLink to={`/categories_list/${props.id}`} className="categories-list-item-link">
                    <img src={props.image} width="270" height="170" alt={props.title}/>
                    <p className="categories-list-item-title">{props.title}</p>
                </NavLink>
            </li>
     );
}
 
export default Category;