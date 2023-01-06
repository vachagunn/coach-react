import React from "react";

class Registration extends React.Component {
    render() {
      return (
        <form className="authorization">
            <h1 className="authorization-title">Регистрация</h1>
            <div className="authorization_roles">
                <button className="student-btn active" type="button">Я ученик</button>
                <button className="coach-btn" type="button">Я тренер</button>
            </div>
            <div className="work-block">
                <h2 className="block-title">Как Вы работаете?</h2>
                <label className="work-option option-1">
                    <input className="work-checkbox" type="checkbox"></input>
                    <span className="work-checkbox-text">Я частный специалист</span>
                </label>
                <label className="work-option option-2">
                    <input className="work-checkbox" type="checkbox"></input>
                    <span className="work-checkbox-text">Я работаю в компании</span>
                </label>
            </div>
            <div className="name-block">
                <h2 className="block-title">Как Вас зовут?</h2>
                <input className="name-input" type="text" placeholder="ФИО"></input>
            </div>
            <div className="accept-block">
                <label>
                    <input className="checkbox" type="checkbox"></input>
                    <span className="checkbox-text">Принимаю <a href="#" className="accent">публичную оферту, условия использования</a></span>
                </label>
            </div>
            <button className="next-btn btn" type="submit">Далее</button>
            {/* <div className="authorization_sign-in">
                <input className="login" type="text" aria-label="Ввод телефона или логина" placeholder="Телефон или почта" required/>
                <input className="password" type="password" aria-label="Ввод пароля" placeholder="Пароль" required/>
                <div className="additional_options">
                    <label className="remember_block">
                        <input className="checkbox" type="checkbox" />  
                        <span className="checkbox-text">Запомнить меня</span>
                    </label>
                    <a href="#" className="forgot_password">Забыли пароль?</a>
                </div>
                <button className="sign-in_button" type="submit">Войти</button>
                <a href="#" className="registration">Зарегистрироваться</a>
            </div> */}
        </form>
      )
    }
}

export default Registration