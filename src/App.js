

import React, { Component } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./css/App.css"

//Dependency component
import LoginViewContainer from "./container/LoginViewContainer"
import SiginInViewContainer from "./container/SiginInViewContainer"
import UserInfoViewContainer from "./container/UserInfoViewContainer"
import HomePageViewContainer from "./container/HomePageViewContainer"
 
class App extends Component{

    render(){
       
        return (
            <>
            <div className="App-Container" >
            <div className="App-Heading"><b>Simple Lizard Type POC</b></div>
            <Router>
                
                <Route exact path="/" >
                    <LoginViewContainer />
                </Route>
                <Route path="/LizardPoc" >
                    <HomePageViewContainer />
                </Route>
                <Route path="/sign-in" >
                    <SiginInViewContainer />
                </Route>
                
            </Router>
            </div>   
            </>
        )
    }
}
export default App
