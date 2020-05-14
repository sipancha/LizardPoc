import React, { Component } from 'react'
import { createPortal } from 'react-dom'

// dependancy comp

import PopUp from "./PopUp"


const popRoot = document.getElementById('popup-root')

class CreatePortalPopUp extends Component {
  render() {
    return createPortal(
      <PopUp {...this.props} />,
      popRoot
    )
  }
}

export default CreatePortalPopUp