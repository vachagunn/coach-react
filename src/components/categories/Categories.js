import './style.css'

import Category from '../category/Category';

import { categories } from '../../helpers/categoriesList';


const Categories = () => {
    return ( 
        <section className="categories-block">
            <h2 className="categories-title">Категории</h2>
            <ul className="categories-list">
                {categories.map((category) => {
                    return <Category
                        title={category.title}
                        image={category.image}
                    />;
                })}
            </ul>
        </section>
     );
}
 
export default Categories;