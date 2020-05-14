import React, {Component} from "react"

class SignInForm1 extends Component{
    render(){
        const {signInFormCount,signInFormChangeEvent,userInformation} = this.props
        if(signInFormCount===1){
            return (
                <>
                <label style={{paddingRight:"15px"}} htmlFor="userFullName">FullName</label>
                <input type="text" value={userInformation.userFullName} onChange={signInFormChangeEvent} name="userFullName" />
                <br />
                <label style={{paddingRight:"8px"}} htmlFor="userName">UserName</label>
                <input type="text" value={userInformation.userName} onChange={signInFormChangeEvent} name="userName" />
                <br />
                <label style={{paddingRight:"15px"}} htmlFor="userPassword">Password</label>
                <input type="text" value={userInformation.userPassword} onChange={signInFormChangeEvent} name="userPassword" />
                <br />
                <label style={{paddingRight:"53px"}} htmlFor="userAge">Age</label>
                <input type="text" value={userInformation.userAge} onChange={signInFormChangeEvent} name="userAge" />
                </>
            )
        }else{
            return null
        }        
    }
}
export default SignInForm1