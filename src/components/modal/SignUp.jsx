import './sign-up_style.css'

import whatsapp from './../../img/whatsapp.svg'
import telegram from './../../img/telegram.svg'

import {cards} from './../../helpers/cardsList'

const SignUp = ({active, setActive, children}) => {
    return ( 
        <div className={active ? "description-block active" : "description-block"} onClick={() => setActive(false)}>
            <div className={active ? "description-content sign-up active" : "description-content"} onClick={e => e.stopPropagation()}>
                {children}
                <div className='modale-sign-up__header'>
                    <h2 className='modale-sign-up__title'>{cards[0].name}</h2>
                    <p className='modale-sign-up__rating'>{cards[0].rating}★</p>
                </div>
                <div className='modale-sign-up__content'>
                    <div className='modale-sign__block'>
                        <div className='modale-sign__block-data'>
                            <p className='data-title'>Мобильный</p>
                            <p className='data-value'>+7 922 222-22-22</p>
                        </div>
                        <a href='#' className='messanger'>
                            <img src={whatsapp} width="50" height="50" alt='WhatsApp'/>
                        </a>
                    </div>
                    <div className='modale-sign__block'>
                        <div className='modale-sign__block-data'>
                            <p className='data-title'>Имя пользователя</p>
                            <p className='data-value'>@simple</p>
                        </div>
                        <a href='#' className='messanger'>
                            <img src={telegram} width="50" height="50" alt='Telegram'/>
                        </a>
                    </div>
                </div>
                <div className='modale-sign__block__place'>
                    <p className='data-title'>Место занятия</p>
                    <p className='data-value'>{cards[0].employment}</p>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;