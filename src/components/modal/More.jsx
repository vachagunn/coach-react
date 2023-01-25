import './more_style.css'
import { cards } from '../../helpers/cardsList';

const More = ({active, setActive, children}) => {
    return ( 
        <div className={active ? "description-block active" : "description-block"} onClick={() => setActive(false)}>
            <div className={active ? "description-content active" : "description-content"} onClick={e => e.stopPropagation()}>
                {children}
                <div className="description-block-left-column">
                    <img src={cards[0].image} width="200" height="200" alt="Аватар" />
                    <p className="block-left-option title">Цена занятия</p>
                    <p className="block-left-option value">{cards[0].price} рублей</p>
                    <p className="block-left-option title">Форма занятий</p>
                    <p className="block-left-option value">{cards[0].employment}</p>
                </div>
                <div className="description-block-right-column">
                    <p className="block-right-option title">ФИО</p>
                    <p className="block-right-option value">{cards[0].name}</p>
                    <p className="block-right-option title">Направление</p>
                    <p className="block-right-option value">{cards[0].activity}</p>
                    <div className="block-right-option experience_and_rating">
                        <div className="block-right-option experience">
                            <p className="block-right-option title">Стаж</p>
                            <p className="block-right-option value">{cards[0].experience}</p>
                        </div>
                        <div className="block-right-option rating">
                            <p className="block-right-option title">Рейтинг</p>
                            <p className="block-right-option value">{cards[0].rating}</p>
                        </div>
                    </div>
                    <p className="block-right-option title">Требования к ученику</p>
                    <p className="block-right-option value">{cards[0].requirements}</p>
                    <p className="block-right-option title">Расписание</p>
                    <p className="block-right-option value date">12.12 - 18.12</p>
                    <ul className="block-right-option calendar">
                        <li className='block-right-option calendar-item active'>
                            <p className='day__word'>Пн</p>
                            <p className='day__number'>12.12</p>
                        </li>
                        <li className='block-right-option calendar-item '>
                            <p className='day__word'>Вт</p>
                            <p className='day__number'>13.12</p>
                        </li>
                        <li className='block-right-option calendar-item active'>
                            <p className='day__word'>Ср</p>
                            <p className='day__number'>14.12</p>
                        </li>
                        <li className='block-right-option calendar-item active'>
                            <p className='day__word'>Чт</p>
                            <p className='day__number'>15.12</p>
                        </li>
                        <li className='block-right-option calendar-item'>
                            <p className='day__word'>Пт</p>
                            <p className='day__number'>16.12</p>
                        </li>
                        <li className='block-right-option calendar-item'>
                            <p className='day__word'>Сб</p>
                            <p className='day__number'>17.12</p>
                        </li>
                        <li className='block-right-option calendar-item'>
                            <p className='day__word'>Вс</p>
                            <p className='day__number'>18.12</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default More;