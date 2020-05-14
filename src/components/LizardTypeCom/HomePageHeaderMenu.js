
import React, { Component } from "react"
import { Link, Redirect } from 'react-router-dom'

import "./../../css/HomePageHeaderMenu.css"

class HomePageHeaderMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            menuList :["Home", "UserProfile", "Logout"]
        }
    }
    render(){
        const {updateHeaderMenu} = this.props
        return <>
        <div className="homePageMenuContainer">
            {this.state.menuList.length >0 && this.state.menuList.map(menu=>
                <li onClick={updateHeaderMenu.bind(this,menu)} key={menu}>{menu}</li>    
                
            )}
        </div>
        </>    
        
        
       
    }
}


export default HomePageHeaderMenu