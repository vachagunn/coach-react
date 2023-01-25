import './style.css'
import More from '../modal/More';
import { useState } from 'react';
import SignUp from '../modal/SignUp';

const Card = (props) => {
    const [modalMoreActive, setModalMoreActive] = useState(false)
    const [modalSignUpActive, setModalSignUpActive] = useState(false)
    return ( 
        <li className="card" id={props.id}>
            <div className="card-wrapper">
                <div className="photo-block">
                    <img src={props.image} width={200} height={200} alt={'Аватар ' + props.name} />
                    <p className="photo-block-raiting">Рейтинг: {props.rating}</p>
                    <a href="#" className="photo-block-reviews">Отзывов: {props.reviews}</a>
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
                <a href="#" className="information-block-more" onClick={() => setModalMoreActive(true)}>Подробнее</a>
                <a href="#" className="information-block-enroll" onClick={() => setModalSignUpActive(true)}>Записаться</a>
            </div>
            <More active={modalMoreActive} setActive={setModalMoreActive}/>
            <SignUp active={modalSignUpActive} setActive={setModalSignUpActive}/>
        </li>
     );
}
 
export default Card;