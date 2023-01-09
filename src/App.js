import React from "react"

import Activities from "./components/Activities"
import Authorization from "./components/Authorization"
import Header_Authorization from "./components/Header_Authrization"
import Registration from "./components/Registration"
import Search from "./components/Search"
import Categories from "./components/Categories"
import Recommendations from "./components/Recommendations"
import Footer from "./components/Footer"
import Arrow from "./components/Arrow"
import Description from "./components/Description"
import Users from "./components/Users"
import Header from "./components/header/Header"

import category from './img/slider/сategory-education.jpg'
import avatarCard1 from './img/cards/card-avatar-1.png'
import avatarCard2 from './img/cards/card-avatar-2.png'

import './styles/authorization.css'
import './styles/registration.css'
import './styles/activities.css'
import './styles/description.css'
import './styles/main.css'
  
class App extends React.Component {
  render() {
    return(
      <div className="App">
        {/* <Header_Authorization /> */}
        {/* <Users /> */}
        {/* <Search /> */}
        {/* <Categories /> */}
        {/* <Recommendations /> */}
        {/* <Footer /> */}
        {/* <Description /> */}
        {/* <Arrow /> */}
        {/* <Activities /> */}
        {/* <Registration /> */}
        {/* <Authorization /> */}

        <Header />

        <main className="main">
            <form className="search-block">
                <input className="search-input" type="text" placeholder="Поиск"/>
                <a href="#" className="search-btn" type="button">Найти</a>
            </form>
            <section className="categories-block">
                <h2 className="categories-title">Категории</h2>
                <ul className="categories-list">
                    <li className="categories-list-item">
                        <a href="#" className="categories-list-item-link">
                            <img src={category} width="270" height="170" alt="Образование"/>
                            <p className="categories-list-item-title">Образование</p>
                        </a>
                    </li>
                    <li className="categories-list-item">
                        <a href="#" className="categories-list-item-link">
                            <img src={category} width="270" height="50" alt="Спорт" />
                            <p className="categories-list-item-title">Спорт</p>
                        </a>
                    </li>
                    <li className="categories-list-item">
                        <a href="#" className="categories-list-item-link">
                            <img src={category} width="270" height="170" alt="Киберспорт" />
                            <p className="categories-list-item-title">Киберспорт</p>
                        </a>
                    </li>
                    <li className="categories-list-item">
                        <a href="#" className="categories-list-item-link">
                            <img src={category} width="270" height="170" alt="Образование" />
                            <p className="categories-list-item-title">Творчество</p>
                        </a>
                    </li>
                </ul>
            </section>
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
        </main>

        <footer class="page-footer">
            <div class="page-footer-wrapper">
                <div class="page-footer-links">
                    <h2 class="page-footer-title">Coach</h2>
                    <ul class="links-list">
                        <li class="links-list-item">
                            <a href="#">Категории</a>
                        </li>
                        <li class="links-list-item">
                            <a href="#">Мобильная версия</a>
                        </li>
                        <li class="links-list-item">
                            <a href="#">Рекламодателям</a>
                        </li>
                    </ul>
                </div>
                <div class="contacts">
                    <p class="support">Служба поддержки:</p>
                    <a href="#">
                        <p class="tel">8 (953) 123-45-67</p>
                    </a>
                </div>
            </div>
        </footer>

        <button className="up-button" type="button">
            ↑
            <span className="visually-hiden">Наверх</span>
        </button>
        <script src="/js/index.js" type="text/babel"></script> 
        <script src='/js/up-button.js'></script>
      </div>
    )
  }
}

export default App