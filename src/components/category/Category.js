import { NavLink } from 'react-router-dom';

import './style.css'

import { categories } from '../../helpers/categoriesList';
import { useParams } from 'react-router-dom';

const Category = (props) => {
    const {id} = useParams();
    const category = categories[id];

    return ( 
        <li className="categories-list-item">
            <NavLink to="/category" className="categories-list-item-link">
                <img src={props.image} width="270" height="170" alt={props.title}/>
                <p className="categories-list-item-title">{props.title}</p>
            </NavLink>
        </li>   
     );
}
 
export default Category;