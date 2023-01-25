import './style.css'

import Card from '../card/Card';

import {cards} from './../../helpers/cardsList'

const Cards = () => {
    return ( 
        <section className="recommendations-block">
            <h2 className="recommendaions-block-title" id='t2'>Рекомендуем</h2>
            <ul className="cards">
                {cards.map((card, index) => {
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
                    />;
                })}
            </ul>
        </section>
     );
}
 
export default Cards;