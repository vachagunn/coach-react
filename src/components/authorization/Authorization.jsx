import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './style.css'


const Authorization = () => {
    const [isActive, setActive] = useState(false)
    
    const ToggleHandler = () => {
        setActive(!isActive)
    }
    return (
        <form className="authorization">
            <h1 className="authorization-title">Вход</h1>
            <div className="authorization_roles">
                <button className={`student-btn ${!isActive ? 'change_color' : ''}`} type="button" onClick={ToggleHandler}>Я ученик</button>
                <button className={`coach-btn ${isActive ? 'change_color' : ''}`} type="button" onClick={ToggleHandler}>Я тренер</button>
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
                <NavLink to="/registration" className="registration">Зарегистрироваться</NavLink>
            </div>
        </form>
     );
}
 
export default Authorization;