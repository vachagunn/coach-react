import './style.css'

const Category = (props) => {
    return ( 
        <li className="categories-list-item" id={props.id}>
            <a href="#" className="categories-list-item-link">
                <img src={props.image} width="270" height="170" alt={props.title}/>
                <p className="categories-list-item-title">{props.title}</p>
            </a>
        </li>   
     );
}
 
export default Category;