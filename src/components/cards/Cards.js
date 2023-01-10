import './style.css'

import avatarCard1 from './../../img/cards/card-avatar-1.png'
import avatarCard2 from './../../img/cards/card-avatar-2.png'

const Cards = () => {
    return ( 
        <section className="recommendations-block">
            <h2 className="recommendaions-block-title">Рекомендуем</h2>
            <ul className="cards">
                <li className="card">
                    <div className="photo-block">
                        <img src={avatarCard1} width="" height="" alt="Аватар" />
                        <p className="photo-block-raiting">Рейтинг: 5.0</p>
                        <a href="#" className="photo-block-reviews">228 отзывов</a>
                    </div>
                    <div className="information-block">
                        <h3 className="information-block-name">Александр "Simple" Костылев</h3>
                        <p className="information-block-activity">CS:GO</p>
                        <p className="information-block-experience">Стаж 9 лет</p>
                        <p className="information-block-description">Игрок в КС со стажем, победитель многих соревнований. Три хэдшота ван тапами в каждом раунде - норма. Научит правильно общаться с чатом и профессионально уворачиваться от флешки.</p>
                        <div className="information-block-buttons">
                            <a href="#" className="information-block-more">Подробнее</a>
                            <a href="#" className="information-block-enroll">Записаться</a>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="photo-block">
                        <img src={avatarCard2} width="270" height="170" alt="Аватар" />
                        <p className="photo-block-raiting">Рейтинг: 5.0</p>
                        <a href="#" className="photo-block-reviews">228 отзывов</a>
                    </div>
                    <div className="information-block">
                        <h3 className="information-block-name">Александр "Simple" Костылев</h3>
                        <p className="information-block-activity">CS:GO</p>
                        <p className="information-block-experience">Стаж 9 лет</p>
                        <p className="information-block-description">Игрок в КС со стажем, победитель многих соревнований. Три хэдшота ван тапами в каждом раунде - норма. Научит правильно общаться с чатом и профессионально уворачиваться от флешки.</p>
                        <div className="information-block-buttons">
                            <a href="#" className="information-block-more">Подробнее</a>
                            <a href="#" className="information-block-enroll">Записаться</a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
     );
}
 
export default Cards;