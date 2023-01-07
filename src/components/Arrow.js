import React from "react";
// import arrow from "../scripts/up-arrow"

class Arrow extends React.Component {
    render() {
      return (
        <div>
            <button class="up-button" type="button">
                ↑
                <span class="visually-hiden">Наверх</span>
            </button>
            {/* <script src={arrow}></script> */}
        </div>
      )
    }
}

export default Arrow