import React, {Component} from "react"
import { connect } from "react-redux";

//dependancey comp
import UserInfoView from "./../../src/components/LizardTypeCom/UserInfoView"

//selectors
import { getUserInfoSelector } from "./../selectors/UserInfoViewSelector"

const mapStateToProps = state => {
    return { 
        userInfo : getUserInfoSelector(state)
    };
}; 

class UserInfoViewContainer extends Component{
    render(){
       const {userInfo} = this.props
       const makeUserInfoArr = Object.entries(userInfo)
       console.log(makeUserInfoArr)
       return <UserInfoView makeUserInfoArr={makeUserInfoArr} />
    }
}

export default connect(mapStateToProps,null)(UserInfoViewContainer);