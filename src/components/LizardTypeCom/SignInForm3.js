import React, {Component} from "react"

class SignInForm3 extends Component{
    render(){
        var {signInFormCount,userInformation,signInFormChangeEvent} = this.props
        if(signInFormCount===3){
            return (
                <>
                <label htmlFor="udesignation">Designation</label>
                <input type="text" value={userInformation.userDesignation} onChange={signInFormChangeEvent} name="userDesignation" />
                <br />
                <label htmlFor="ucurrentproject">Current Project</label>
                <input type="text" value={userInformation.userCurrentproject} onChange={signInFormChangeEvent} name="userCurrentproject" />
                </>
            )
        }else{
            return null
        }        
    }
}
export default SignInForm3