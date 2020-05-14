import React, { Component } from 'react'
import { connect } from "react-redux";


// dependancy comp

import { resetSignInFormCount, successFailurePopUpStatus } from "./../actions/index"
import CreatePortalPopUpHOC from "./../components/HOC/CreatePortal/CreatePortalPopUp_HOC"

const mapDispatchToProps = dispatch => {
    return {
        resetSignInFormCount: ()=>dispatch(resetSignInFormCount()),
        successFailurePopUpStatus: status => dispatch( successFailurePopUpStatus(status) )
    };
}

    class CreatePortalPopUpHocContainer extends Component{
        onPopUpClose = () =>{
            
            if(this.props.siginInStatusChangeEvent && this.props.successFailurePopUpColor!="red"){
                this.props.siginInStatusChangeEvent()
                this.props.resetSignInFormCount();
            } 
            this.props.successFailurePopUpStatus(false)   
        }
        render(){
            return (
                <CreatePortalPopUpHOC onPopUpClose = {this.onPopUpClose} {...this.props} />
            )
        }
    }

  


export default connect(null,mapDispatchToProps)(CreatePortalPopUpHocContainer);