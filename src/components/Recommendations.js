import React from "react";

class Recommendations extends React.Component {
    render() {
      return (
        <section className="recommendations-block">
            <h2 className="recommendations-block-title">Рекомендуем</h2>
            <ul className="cards">
                <li className="card">
                    <div className="photo-block">
                        <img src="#" width="" height="" alt="Аватар" />
                        <p className="photo-block-rating">Рейтинг 5.0</p>
                        <a href="#" className="photo-block-reviews">228 отзывов</a>
                    </div>
                    <div className="information-block">
                        <h3 className="information-block-name">Александр "Simple" Костылев</h3>
                        <p className="information-block-activity">CS:GO</p>
                        <p className="information-block-experience">Стаж 9 лет</p>
                        <p class="information-block-description">Игрок в КС со стажем, победитель многих соревнований. Три хэдшота ван тапами в каждом раунде - норма. Научит правильно общаться с чатом и профессионально уворачиваться от флешки.</p>
                        <div class="information-block-buttons">
                            <a href="#" class="information-block-more">Подробнее</a>
                            <a href="#" class="information-block-enroll">Записаться</a>
                        </div>
                    </div>
                </li>
                <li class="card">
                    <div class="photo-block">
                        <img src="#" width="" height="" alt="Аватар" />
                        <p class="photo-block-raiting">Рейтинг: 5.0</p>
                        <a href="#" class="photo-block-reviews">228 отзывов</a>
                    </div>
                    <div class="information-block">
                        <h3 class="information-block-name">Александр "Simple" Костылев</h3>
                        <p class="information-block-activity">CS:GO</p>
                        <p class="information-block-experience">Стаж 9 лет</p>
                        <p class="information-block-description">Игрок в КС со стажем, победитель многих соревнований. Три хэдшота ван тапами в каждом раунде - норма. Научит правильно общаться с чатом и профессионально уворачиваться от флешки.</p>
                        <div class="information-block-buttons">
                            <a href="#" class="information-block-more">Подробнее</a>
                            <a href="#" class="information-block-enroll">Записаться</a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
      )
    }
}

export default Recommendations