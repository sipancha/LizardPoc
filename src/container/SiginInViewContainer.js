import React, {Component} from "react"
import { connect } from "react-redux"

//Dependancy component 

import { signInFormChangeEvent, signInFormIncrement, signInFormDecrement,
    addUser } from "./../actions/index";

import SignInView from "./../components/LizardTypeCom/SignInView"


const mapStateToProps = state => {
    return { 
        signInFormCount: state.signInFormCount,
        showPopup : state.showPopup,
        successFailurePopUp : state.successFailurePopUp
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
        signInFormChangeEvent: userInfo => dispatch(signInFormChangeEvent(userInfo)),
        signInFormIncrement: ()=>dispatch(signInFormIncrement()),
        signInFormDecrement: ()=>dispatch(signInFormDecrement()),
        addUser : userInfo =>dispatch(addUser(userInfo))
    };
}

class SiginInViewContainer extends Component{
    constructor(props){
        super(props)
        this.state ={
            signInStatus: false,
            userInformation : {
                userFullName:"",
                userName:"",
                userPassword:"",
                userAge:"",
                userBachelorDegree:"",
                userMasterDegree:"",
                userDesignation:"",
                userCurrentproject:""
            }
        }

    }
    signInFormIncrement = () =>{
        this.props.signInFormIncrement()
    }
    signInFormDecrement = () =>{
        this.props.signInFormDecrement()
    }
    signInFormChangeEvent = (event) =>{
        
        const { name, value }  = event.target
        this.setState((prvState)=>{
            return Object.assign({}, prvState, {
                userInformation: Object.assign({},prvState.userInformation,{[name]:value} ) 
              })
        })
            
        
    }
    siginInStatusChangeEvent = () =>{
        this.setState({signInStatus: true})
    }
    submitSignInForm = () =>{
        console.log(this.state.userInformation)
       this.props.addUser(this.state.userInformation);
    }

    render(){
        const {signInFormCount, showPopup, successFailurePopUp} = this.props
        const { signInStatus, userInformation } =this.state
        
        return <SignInView 
        signInFormCount={signInFormCount}
        userInformation={userInformation}
        showPopup={showPopup}
        signInStatus={signInStatus}
        signInFormIncrement={this.signInFormIncrement}
        signInFormDecrement={this.signInFormDecrement}
        signInFormChangeEvent={this.signInFormChangeEvent}
        siginInStatusChangeEvent={this.siginInStatusChangeEvent}
        submitSignInForm={this.submitSignInForm}
        successFailurePopUpMsg={successFailurePopUp.msg}
        successFailurePopUpColor={successFailurePopUp.color}
        />    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SiginInViewContainer);