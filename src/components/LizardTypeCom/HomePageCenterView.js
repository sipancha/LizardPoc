
import React, { Component } from "react"
import { Link, Redirect } from 'react-router-dom'

//dependancy comp
import UserInfoViewContainer from "./../../container/UserInfoViewContainer"


class HomePageCenterView extends Component{

    render(){
        const {activeMenu} = this.props
        return <>
          <div className="centerViewContainer">
             {activeMenu==="Home" && <div className="centerViewHome">Welcome to Lizard POC !</div>}
             {activeMenu==="UserProfile" && <UserInfoViewContainer />}
          </div>
        </>
        
       
    }
}


export default HomePageCenterView