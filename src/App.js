import React from "react"
import Activities from "./components/Activities"
import Authorization from "./components/Authorization"
import Header from "./components/Header"
import Header_Authorization from "./components/Header_Authrization"
import Registration from "./components/Registration"
import Search from "./components/Search"
import Categories from "./components/Categories"
import Recommendations from "./components/Recommendations"
import Footer from "./components/Footer"
import Arrow from "./components/Arrow"
import './css/authorization.css'
import './css/registration.css'
import './css/activities.css'
  
class App extends React.Component {
  render() {
    return(
      <div className="name">
        <Header_Authorization />
        <Search />
        <Categories />
        <Recommendations />
        <Footer />
        <Arrow />
        {/* <Activities /> */}
        {/* <Registration /> */}
        {/* <Authorization /> */}
      </div>
    )
  }
    /* constructor(props) {
        super(props)
        this.state = {
            helpText: "Help Text",
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)
    }

    helpText = 'what'
    render() {
        return (<div className="name">
            <Header title="Шапка сайта!"/>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText} 
                onClick={this.inputClick} 
                onMouseEnter={this.mouseOver} 
                onChange={event => this.setState({userData: event.target.value})}/>
            <p>{this.state.helpText === "what" ? "YES" : "NO"}</p>
            <img src={chel} />
        </div>)
    }

    inputClick() {
        this.setState({ helpText: "Changed" })
        console.log('Clicked')
    }
    mouseOver() {console.log('MouseOver')} */
}

export default App