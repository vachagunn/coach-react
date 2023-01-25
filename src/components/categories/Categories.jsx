import './style.css'

import Category from '../category/Category';

import { categories } from '../../helpers/categoriesList';

const Categories = () => {
    return ( 
        <section className="categories-block">
            <h2 className="categories-title" id="t1">Категории</h2>
            <ul className="categories-list">
                {categories.map((category) => {
                    return <Category
                        id={category.id}
                        title={category.title}
                        image={category.image}
                        items={category.items}
                    />;
                })}
            </ul>
        </section>
     );
}
 
export default Categories;