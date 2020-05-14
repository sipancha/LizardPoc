import React, { Component } from "react"
import { connect } from "react-redux";


import HomePageView from "./../components/LizardTypeCom/HomePageView"
import { Logout } from "./../actions/index";


const mapStateToProps = state => {
    return { loginStatus: state.loginStatus
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
            Logout: () => dispatch( Logout() )
        
    };
}

class HomePageViewContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeMenu : "Home"
        }
    }
    updateHeaderMenu = (activeMenu) =>{
        //alert(activeMenu)
        if(activeMenu==="Logout"){
            this.props.Logout()
            localStorage.removeItem("state")
        }
        this.setState({activeMenu:activeMenu})
    }
   
    render(){
        
        const { loginStatus } = this.props 
        const { activeMenu } = this.state 
             
        return <HomePageView 
        loginStatus={loginStatus}
        updateHeaderMenu={this.updateHeaderMenu}
        activeMenu={activeMenu}
        Logout={this.Logout}
        />
    
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePageViewContainer);