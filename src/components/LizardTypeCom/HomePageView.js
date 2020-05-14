
import React, { Component } from "react"
import { Link, Redirect } from 'react-router-dom'

import HomePageHeaderMenu from "./HomePageHeaderMenu"
import HomePageCenterView from "./HomePageCenterView"


class HomePageView extends Component{

    render(){
        const {loginStatus, updateHeaderMenu, activeMenu,Logout} = this.props
        if(activeMenu!="Logout"){
            return <>
            <hr />
            <HomePageHeaderMenu updateHeaderMenu={updateHeaderMenu} Logout={Logout} />
            <hr />
            <HomePageCenterView activeMenu={activeMenu} />   
            </>
        }else{
            return <Redirect to="/" />
        }
       
    }
}


export default HomePageView