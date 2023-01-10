import './style.css'

import category from './../../img/slider/сategory-education.jpg'

const Categories = () => {
    return ( 
        <section className="categories-block">
            <h2 className="categories-title">Категории</h2>
            <ul className="categories-list">
                <li className="categories-list-item">
                    <a href="#" className="categories-list-item-link">
                        <img src={category} width="270" height="170" alt="Образование"/>
                        <p className="categories-list-item-title">Образование</p>
                    </a>
                </li>
                <li className="categories-list-item">
                    <a href="#" className="categories-list-item-link">
                        <img src={category} width="270" height="50" alt="Спорт" />
                        <p className="categories-list-item-title">Спорт</p>
                    </a>
                </li>
                <li className="categories-list-item">
                    <a href="#" className="categories-list-item-link">
                        <img src={category} width="270" height="170" alt="Киберспорт" />
                        <p className="categories-list-item-title">Киберспорт</p>
                    </a>
                </li>
                <li className="categories-list-item">
                    <a href="#" className="categories-list-item-link">
                        <img src={category} width="270" height="170" alt="Образование" />
                        <p className="categories-list-item-title">Творчество</p>
                    </a>
                </li>
            </ul>
        </section>
     );
}
 
export default Categories;