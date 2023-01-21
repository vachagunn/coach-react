import './style.css'

const Card = (props) => {
    return ( 
        <li className="card" id={props.id}>
            <div className="card-wrapper">
                <div className="photo-block">
                    <img src={props.image} width='200' alt={'Аватар ' + props.name} />
                    <p className="photo-block-raiting">Рейтинг: {props.rating}</p>
                    <a href="#" className="photo-block-reviews">{props.reviews} отзывов</a>
                </div>
                <div className="information-block">
                    <h3 className="information-block-name">{props.name}</h3>
                    <p className="information-block-activity">{props.activity}</p>
                    <p className="information-block-experience">Опыт {props.experience} лет</p>
                    <p className="informaion-block-city">{props.city}</p>
                    <p className="information-block-description">{props.description}</p>
                </div>
            </div>
            <div className="information-block-buttons">
                <a href="#" className="information-block-more">Подробнее</a>
                <a href="#" className="information-block-enroll">Записаться</a>
            </div>
        </li>
     );
}
 
export default Card;