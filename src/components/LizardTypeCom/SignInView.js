import React, {Component} from "react"
import { Redirect } from "react-router-dom"

//Dependancy component 
import SignInForm1 from "./SignInForm1"
import SignInForm2 from "./SignInForm2"
import SignInForm3 from "./SignInForm3"

import CreatePortalPopUpHocContainer from "./../../container/CreatePortalPopUpHocContainer"

class SignInView extends Component{
    
    render(){
        const {signInFormCount, userInformation, showPopup, signInStatus,
            signInFormIncrement, signInFormDecrement,
            signInFormChangeEvent, siginInStatusChangeEvent,
            submitSignInForm, successFailurePopUpColor, successFailurePopUpMsg} = this.props

        console.log(this.props)
        if(signInStatus){
            return <Redirect to="/" />
        }else{
            return (
                <>
                <div>
                    <div style={{paddingBottom:"10px"}}>
                        <span style={{color:signInFormCount>=1 ? "green":""}}>Personal Details >></span>
                        <span style={{color:signInFormCount>=2 ? "green":""}}>Education Details >></span> 
                        <span style={{color:signInFormCount>=3 ? "green":""}}>Professional Details >></span>
                    </div>   
                    <SignInForm1 userInformation={userInformation} signInFormChangeEvent={signInFormChangeEvent} signInFormCount={signInFormCount} />
                    <SignInForm2 userInformation={userInformation} signInFormChangeEvent={signInFormChangeEvent} signInFormCount={signInFormCount} />
                    <SignInForm3 userInformation={userInformation} signInFormChangeEvent={signInFormChangeEvent} signInFormCount={signInFormCount} />
                    <br />
                    <div style={{padding:"10px 0"}}>
                    {signInFormCount>1 && <button onClick={signInFormDecrement}>Previous</button>}
                    {signInFormCount<3 && <button onClick={signInFormIncrement}>Next</button>}
                    {signInFormCount===3 && <button onClick={submitSignInForm}>Submit</button>}
                    </div>
                </div>
                {showPopup ? ( <CreatePortalPopUpHocContainer 
                        successFailurePopUpColor={successFailurePopUpColor} 
                        siginInStatusChangeEvent={siginInStatusChangeEvent} 
                        successFailurePopUpMsg={successFailurePopUpMsg} /> ) 
                    : null
                }
                </>
            )
        }
    }
}

export default SignInView