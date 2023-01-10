import React from "react"

/* Компоненты */
import Header from "./components/header/Header"
import Search from "./components/search/Search"
import Cards from "./components/cards/Cards"
import Activities from "./components/Activities"
import Authorization from "./components/Authorization"
import Header_Authorization from "./components/Header_Authrization"
import Registration from "./components/Registration"
import Arrow from "./components/Arrow"
import Description from "./components/Description"
import Users from "./components/Users"
import Footer from "./components/footer/Footer"

/* Страницы */
import Home from "./pages/Home"

/* Дополнительные стили */
import './styles/authorization.css'
import './styles/registration.css'
import './styles/activities.css'
import './styles/description.css'

/* Основные стили */
import './styles/main.css'
  
class App extends React.Component {
  render() {
    return(
      <div className="App">
        {/* <Header_Authorization /> */}
        {/* <Users /> */}
        {/* <Recommendations /> */}
        {/* <Description /> */}
        {/* <Arrow /> */}
        {/* <Activities /> */}
        {/* <Registration /> */}
        {/* <Authorization /> */}

        <Home />

        <Footer />
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