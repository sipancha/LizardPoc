import React, { Component } from 'react'
import "./../../../css/PopUp.css"


class PopUp extends Component {
  render() {
    return (
      <div className="containerDiv">
        <div className="mainDiv">
          <div className="popUpErrorMsg" style={{color:`${this.props.successFailurePopUpColor}`}}>{this.props.successFailurePopUpMsg}</div>
          <button onClick={this.props.onPopUpClose}>Close</button>
        </div>
      </div>
    )
  }
}

export default PopUp
