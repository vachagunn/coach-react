import React from "react";

class Footer extends React.Component {
    render() {
      return (
        <footer class="page-footer">
            <div class="page-footer-wrapper">
                <div class="page-footer-links">
                    <h2 class="page-footer-title">Coach</h2>
                    <ul class="links-list">
                        <li class="links-list-item">
                            <a href="#">Категории</a>
                        </li>
                        <li class="links-list-item">
                            <a href="#">Мобильная версия</a>
                        </li>
                        <li class="links-list-item">
                            <a href="#">Рекламодателям</a>
                        </li>
                    </ul>
                </div>
                <div class="contacts">
                    <p class="support">Служба поддержки:</p>
                    <a href="#">
                        <p class="tel">8 (953) 123-45-67</p>
                    </a>
                </div>
            </div>
        </footer>
      )
    }
}

export default Footer