import { useEffect, useState } from 'react'
import './style.css'
import './../../components/authorization/style.css'

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Логин пустой')
    const [passwordError, setPasswordError] = useState('Пароль пустой')
    const [formValid, setFormValid] = useState(false)
    const [isActive, setActive] = useState(false)
    

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3) {
            setPasswordError('Пароль должен быть длинее 3 символов')
            if (!e.target.value) {
                setPasswordError('Некорректный пароль')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    
    const ToggleHandler = () => {
        setActive(!isActive)
    }

    return ( 
        <form className="authorization">
            <h1 className="authorization-title">Регистрация</h1>
            <div className="authorization_roles">
                <button className={`student-btn ${!isActive ? 'change_color' : ''}`} type="button" onClick={ToggleHandler}>Я ученик</button>
                <button className={`coach-btn ${isActive ? 'change_color' : ''}`} type="button" onClick={ToggleHandler}>Я тренер</button>
            </div>
            <div className="authorization_sign-in">
                {(emailDirty && emailError) && <div style={{color: "red", marginBottom: "10px"}}>{emailError}</div>}
                <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name='email' className="login" type="text" aria-label="Ввод телефона или логина" placeholder="Телефон или почта" required/>
                {(passwordDirty && passwordError) && <div style={{color: "red", marginBottom: "10px"}}>{passwordError}</div>}
                <input value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name='password' className="password" type="password" aria-label="Ввод пароля" placeholder="Пароль" required/>
                <button disabled={!formValid} className="register_btn" type="submit">Зарегистрироваться</button>
            </div>
            {/* <div className="authorization_roles">
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
            <button className="next-btn btn" type="submit">Далее</button> */}
        </form>
     );
}
 
export default Registration;