import React from "react";
import Search from "./Search";

class Activities extends React.Component {
    render() {
      return (
        <form className="authorization">
            <h2 className="block-title">Чем Вы занимаетесь?</h2>
            <Search />
            <div className="activities-block">
                <ul className="activities">
                    <li><a href="#" className="btn">Футбол</a></li>
                    <li><a href="#" className="btn">Хоккей</a></li>
                    <li><a href="#" className="btn">Рисование акрилом</a></li>
                    <li><a href="#" className="btn">Теннис</a></li>
                    <li><a href="#" className="btn">CS GO</a></li>
                    <li><a href="#" className="btn">Барабаны</a></li>
                    <li><a href="#" className="btn">Dota 2</a></li>
                </ul>
            </div>
            <div className="control_buttons">
                <button className="back-btn btn" type="submit">Назад</button>
                <button className="next-btn btn" type="submit">Далее</button>
            </div>
        </form>
      )
    }
}

export default Activities