import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Компоненты */
import Header from "./components/header/Header"
import Search from "./components/search/Search"
import Cards from "./components/cards/Cards"
import Authorization from "./components/Authorization"
import Registration from "./components/Registration"
import Arrow from "./components/Arrow"
import Description from "./components/Description"
import Footer from "./components/footer/Footer"

/* Страницы */
import Home from "./pages/Home"
import CategoriesList from "./pages/CategoriesList";

/* Утилиты */
import ScrollToTop from "./utils/scrollToTop";

/* Дополнительные стили */
import './styles/authorization.css'
import './styles/registration.css'
import './styles/description.css'

/* Основные стили */
import './styles/main.css'
  
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Router>
          <ScrollToTop />
          {/* Компоненты */}

          {/* <Description /> */}
          {/* <Arrow /> */}
          {/* <Registration /> */}
          {/* <Authorization /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/categories_list/:id" element={<CategoriesList />} />
          </Routes>

          {/* Страницы */}

          {/* <Home /> */}
          {/* <CategoriesList /> */}

          <Footer />
          {/* <button className="up-button" type="button">
              ↑
              <span className="visually-hiden">Наверх</span>
          </button>
          <script src="/js/index.js" type="text/babel"></script> 
          <script src='/js/up-button.js'></script> */}
        </Router>
      </div>
    )
  }
}

export default App