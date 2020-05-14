import React, {Component} from "react"

class SignInForm2 extends Component{
    render(){
        var {signInFormCount,userInformation,signInFormChangeEvent} = this.props
        if(signInFormCount===2){
            return (
                <>
                <label htmlFor="ulowerd">Bachelor Degree</label>
                <input type="text" value={userInformation.userBachelorDegree} onChange={signInFormChangeEvent} name="userBachelorDegree" />
                <br />
                <label htmlFor="umasterd">Master Degree</label>
                <input type="text" value={userInformation.userMasterDegree} onChange={signInFormChangeEvent} name="userMasterDegree" />
                </>
            )
        }else{
            return null
        }        
    }
}
export default SignInForm2