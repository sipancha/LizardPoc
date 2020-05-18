import React, {Component} from "react"


class UserInfoView extends Component{
    render(){
       const {makeUserInfoArr} = this.props
       
       
       return (
            <div>
                <div>User Information</div>
                <ul>
                {   makeUserInfoArr.map(([key,val],index)=>{
                           
                        return <li key={key}>{key}-<b>{val}</b></li>
            
                    })
                }
                </ul>
            </div>
        )
    }
}

export default UserInfoView