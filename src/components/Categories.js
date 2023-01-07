import React from "react";
// import photo_1 from "../image/slider/category-education.jpg"

class Categories extends React.Component {
    render() {
      return (
        <section className="categories-block">
            <h2 className="categories-title">Категории</h2>
            <ul className="categories-list">
                <li className="categories-list-item">
                    <a className="categories-list-item-link" href="#">
                        <img src="#" width="270" height="170" alt="Образование" />
                        <p class="categories-list-item-title">Образование</p>
                    </a>
                </li>
                <li className="categories-list-item">
                    <a className="categories-list-item-link" href="#">
                        <img src="#" width="270" height="170" alt="Спорт" />
                        <p class="categories-list-item-title">Спорт</p>
                    </a>
                </li>
                <li className="categories-list-item">
                    <a className="categories-list-item-link" href="#">
                        <img src={'#'} width="270" height="170" alt="Киберспорт" />
                        <p class="categories-list-item-title">Киберспорт</p>
                    </a>
                </li>
                <li className="categories-list-item">
                    <a className="categories-list-item-link" href="#">
                        <img src={"#"} width="270" height="170" alt="Творчество" />
                        <p class="categories-list-item-title">Творчество</p>
                    </a>
                </li>
            </ul>
        </section>
      )
    }
}

export default Categories