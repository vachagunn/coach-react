import './style.css'

import Card from '../card/Card';

import avatarCard1 from './../../img/cards/card-avatar-1.png'
import avatarCard2 from './../../img/cards/card-avatar-2.png'
import avatarCard3 from './../../img/cards/card-avatar-3.png'

import {cards} from './../../helpers/cardsList'

const Cards = () => {
    return ( 
        <section className="recommendations-block">
            <h2 className="recommendaions-block-title">Рекомендуем</h2>
            <ul className="cards">
                {cards.map((card) => {
                    return <Card 
                        id={card.id}
                        name={card.name} 
                        activity={card.activity}
                        experience={card.experience}
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