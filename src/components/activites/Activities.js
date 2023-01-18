import { useParams } from "react-router-dom";

// import Activity from '../activity/Activity';

// import { activities } from '../../helpers/activitiesList';
import { categories } from "../../helpers/categoriesList";

import './style.css';


const Activities = () => {
    // Для поиска кнопок
    // const [ActivityList, setActivityList] = useState(data);
    const {id} = useParams();
    const category = categories[id];

    return ( 
        <>
            <div className="activities-block">
                <p>Страница номер: {id}</p>
                <h2 className="block-title">{category.title}</h2>
                <ul className="activities">
                    {category.items.map((item) => {
                        return <li className="btn">{item}</li>
                    })}
                    {/* Вывод кнопок через компоненту Activity */}
                    {/* {activities.map((activity) => {
                        return <Activity
                            title={activity.title} 
                            item={activity.item} 
                        />
                    })} */}
                </ul>
                <a href='#' className='show__more'>Показать все категории</a>
                {/* <div className="control_buttons">
                    <button className="back-btn btn" type="submit">Назад</button>
                    <button className="next-btn btn" type="submit">Далее</button>
                </div> */}
            </div>
        </>
     );
}
 
export default Activities;