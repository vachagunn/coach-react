import { NavLink } from 'react-router-dom';

import './style.css'

import { useParams } from 'react-router-dom';
import CategoriesList from '../../pages/CategoriesList';

const Category = (props) => {

    return (
        <li className="categories-list-item">
            <NavLink to='/' className="categories-list-item-link">
                <img src={props.image} width="270" height="170" alt={props.title}/>
                <p className="categories-list-item-title">{props.title}</p>
            </NavLink>
        </li>   
     );
}
 
export default Category;