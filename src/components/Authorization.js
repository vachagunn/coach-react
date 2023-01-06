import React from "react";
// import changeRole from "../scripts/change_role";

class Authorization extends React.Component {
    render() {
      return (
        <form className="authorization">
            <h1 className="authorization-title">Вход</h1>
            <div className="authorization_roles">
                <button className="student-btn active" type="button">Я ученик</button>
                <button className="coach-btn" type="button">Я тренер</button>
            </div>
            <div className="authorization_sign-in">
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
            </div>
        </form>
      )
    }
}

export default Authorization