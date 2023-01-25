import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import { cards } from "../../helpers/cardsList";

import { categories } from "../../helpers/categoriesList";

import './style.css';

const Activities = () => {
    // Для поиска кнопок
    // const [ActivityList, setActivityList] = useState(data);
    const {id} = useParams();
    const category = categories[id];

    const [findCards, setFindCards] = useState(false)

    return ( 
        <>
            <div className="activities-block">
                <h2 className="block-title">{category.title}</h2>
                <ul className="activities">
                    {category.items.map((item) => {
                        return <li className="btn" onClick={() => setFindCards(!findCards)}>{item}</li>
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
                {findCards && cards.map((card, result, index) => {
                    return <Card
                        key={index}
                        id={card.id}
                        name={card.name} 
                        activity={card.activity}
                        experience={card.experience}
                        city={card.city}
                        description={card.description}
                        image={card.image}
                        rating={card.rating}
                        reviews={card.reviews} 
                    />
                })}
                {/* <div className="control_buttons">
                    <button className="back-btn btn" type="submit">Назад</button>
                    <button className="next-btn btn" type="submit">Далее</button>
                </div> */}
            </div>
        </>
     );
}
 
export default Activities;