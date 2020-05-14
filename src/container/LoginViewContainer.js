import React, { Component } from "react"
import { connect } from "react-redux";
import axios from "axios"

import { getUser } from "./../actions/index";
import { LOGIN_ERROR_MSG, FAILURE_RED } from "./../constants/action-types"
import LoginView from "./../components/LizardTypeCom/LoginView"

const mapStateToProps = state => {
    return { loginStatus: state.loginStatus,
        userInfo : state.userInfo,
        showPopup : state.showPopup,
        successFailurePopUp : state.successFailurePopUp
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
       
        getUser : loginDetails => dispatch(getUser(loginDetails))
        
    };
}

class LoginViewContainer extends Component{
    constructor(props){
        super(props)
        this.loginUserRef = React.createRef();
        this.loginPwdRef = React.createRef();
    }
    submitLoginForm =(event) =>{
        const loginName = this.loginUserRef.current.value
        const loginPwd = this.loginPwdRef.current.value
                
        this.props.getUser({userName:loginName,userPwd:loginPwd})
              
           
    }
    render(){
        
        const {loginStatus, showPopup, successFailurePopUp} = this.props
        return <LoginView 
        loginStatus={loginStatus} 
        showPopup={showPopup} 
        submitLoginForm={this.submitLoginForm}
        loginUserRef={this.loginUserRef}
        loginPwdRef={this.loginPwdRef}
        successFailurePopUpMsg={successFailurePopUp.msg}
        successFailurePopUpColor={successFailurePopUp.color}
        />
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginViewContainer);