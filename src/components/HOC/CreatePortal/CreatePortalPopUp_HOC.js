import React, { Component } from 'react'

// dependancy comp

import CreatePortalPopUp from "./CreatePortalPopUp"


const HOC = CreatePortalPopUp =>{
    return class extends Component{
        render(){
            
            return (
                <CreatePortalPopUp {...this.props} />
            )
        }
    }
}
  
const CreatePortalPopUpHOC = HOC(CreatePortalPopUp)

export default CreatePortalPopUpHOC