import { SIGNIN_FORM_CHANGE_EVENT, SIGNIN_FORM_INCREMENT, SIGNIN_FORM_DECREMENT,
  LOGIN_STATUS_CHANGE_EVENT, RESET_SIGNIN_FORM_COUNT, SUCCESS_FAILURE_POPUP, LOGOUT,
  SUCCESSFAILUREPOPUPSTATUS
} from "../constants/action-types";

const initialState = {
    loginStatus : false,
    userInfo : {},
    signInFormCount: 1,
    showPopup : false,
    successFailurePopUp : {
      msg:"",
      color : ""
    }
    
};

function rootReducer(state = initialState, action) {
 
  if(action.type === SIGNIN_FORM_INCREMENT){
    return Object.assign({}, state, {signInFormCount: state.signInFormCount+1})
  }
  if(action.type === SIGNIN_FORM_DECREMENT){
    return Object.assign({}, state, {signInFormCount: state.signInFormCount-1})
  }
  if(action.type === LOGIN_STATUS_CHANGE_EVENT){
    console.log(action.payload)
    return Object.assign({}, state, {loginStatus: true}, {
      userInfo: Object.assign({},state.userInfo,action.payload ) 
    })
    
  }
  if(action.type === RESET_SIGNIN_FORM_COUNT){
    return Object.assign({}, state, {signInFormCount: 1})
  }
  if(action.type === SUCCESS_FAILURE_POPUP){
    return Object.assign({}, state, {showPopup: true}, {
      successFailurePopUp: Object.assign({},state.successFailurePopUp, action.payload ) 
    })
  }  
  if(action.type === LOGOUT){
    return Object.assign({}, state, {loginStatus: false})
  }
  if(action.type === SUCCESSFAILUREPOPUPSTATUS){
    return Object.assign({}, state, {showPopup: action.payload})
  }
  return state;
}

export default rootReducer;
