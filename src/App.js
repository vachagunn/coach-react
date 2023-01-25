import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Компоненты */
import Header from "./components/header/Header"
import Search from "./components/search/Search"
import Cards from "./components/cards/Cards"
import Footer from "./components/footer/Footer"

/* Страницы */
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import Home from "./pages/Home"
import CategoriesList from "./pages/CategoriesList";

/* Утилиты */
import ScrollToTop from "./utils/scrollToTop";

/* Основные стили */
import './styles/main.css'
  
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Router>
          <ScrollToTop />

          {/* Ссылки на страницы */}
          <Routes>
            <Route path="/authorization" element={<AuthorizationPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/categories_list/:id" element={<CategoriesList />} />
          </Routes>

        </Router>
      </div>
    )
  }
}

export default App