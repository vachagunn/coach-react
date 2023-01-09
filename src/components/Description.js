import React from "react";

class Description extends React.Component {
    render() {
      return (
        <div className="description-block">
            <div className="description-block-left-column">
                <img src="#" width="315" height="375" alt="Аватар" />
                <p className="block-left-option-title">Цена занятия</p>
                <p className="block-left-option-value">2000 рублей</p>
                <p className="block-left-option-title">Форма занятий</p>
                <p className="block-left-option-value">Очно</p>
            </div>
            <div className="description-block-right-column">
                <p className="block-right-option-title">ФИО</p>
                <p className="block-right-option-value">Знарок Олег Валерьевич</p>
            </div>
        </div>
      )
    }
}

export default Description