import './style.css'

const Activities = () => {
    return ( 
        <>
            <div className="activities-block">
                <h2 className="block-title">Спорт</h2>
                <ul className="activities">
                    <li><a href="#" className="btn">Футбол</a></li>
                    <li><a href="#" className="btn">Баскетбол</a></li>
                    <li><a href="#" className="btn">Хоккей</a></li>
                    <li><a href="#" className="btn">Теннис</a></li>
                    <li><a href="#" className="btn">Бокс</a></li>
                    <li><a href="#" className="btn">Плавание</a></li>
                    <li><a href="#" className="btn">Биатлон</a></li>
                    <li><a href="#" className="btn">Гимнастика</a></li>
                    <li><a href="#" className="btn">Автоспорт</a></li>
                    <li><a href="#" className="btn">Волейбол</a></li>
                    <li><a href="#" className="btn">Бег</a></li>
                </ul>
                <a href='#' className='show__more'>Показать все категории</a>
                {/* <div className="control_buttons">
                    <button className="back-btn btn" type="submit">Назад</button>
                    <button className="next-btn btn" type="submit">Далее</button>
                </div> */}
            </div>
        </>
     );
}
 
export default Activities;