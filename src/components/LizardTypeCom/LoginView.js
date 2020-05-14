import React, { Component } from "react"
import { Link, Redirect } from 'react-router-dom'

import "./../../css/LoginView.css"

import CreatePortalPopUpHocContainer from "./../../container/CreatePortalPopUpHocContainer"


class LoginView extends Component{

    render(){
        
        const {
            loginStatus, showPopup, submitLoginForm, loginUserRef, loginPwdRef,
            successFailurePopUpColor, successFailurePopUpMsg } = this.props
        
        if(!loginStatus){
            return (
                <>
                               
                <div className="txt_align_center">
                    <div><b>User Login</b></div>
                    <br />
                    <label className="userName_label" htmlFor="lname">UserName</label>
                    <input name="lname" type="text" placeholder="UserName" ref={loginUserRef}/>
                    <br />
                    <label className="userName_pwd" htmlFor="lpwd">Password</label>
                    <input name="lpwd" type="password" placeholder="Password" ref={loginPwdRef} />
                    <br />
                    <div className="user_submit">
                        <input type="button" onClick={submitLoginForm} value ="Submit"/>
                        <input className="user_reset_button" type="button" value="Reset"/>
                    </div>
                    <div>
                        <p>Not a Member? <span><b><Link to="/sign-in">Sign-in</Link></b></span></p>
                    </div>
                </div>    
                {showPopup ? 
                        ( <CreatePortalPopUpHocContainer 
                            successFailurePopUpColor={successFailurePopUpColor} 
                            successFailurePopUpMsg={successFailurePopUpMsg} /> )
                        : null
                }
                
                </>
            )
        }else{
            return <Redirect to="LizardPoc" />
                
        }    
    }
}


export default LoginView