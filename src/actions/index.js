
import { SIGNIN_FORM_CHANGE_EVENT, SIGNIN_FORM_INCREMENT, SIGNIN_FORM_DECREMENT,
  LOGIN_STATUS_CHANGE_EVENT, RESET_SIGNIN_FORM_COUNT, SUCCESS_FAILURE_POPUP, LOGOUT,
  ADDUSER, SUCCESSFAILUREPOPUPSTATUS, GETUSER
} from "../constants/action-types";

export const signInFormChangeEvent = payload => {
    return { type: SIGNIN_FORM_CHANGE_EVENT, payload }
};
export const signInFormIncrement = () =>{
  return { type: SIGNIN_FORM_INCREMENT }
}
export const signInFormDecrement = () =>{
  return { type: SIGNIN_FORM_DECREMENT}
}
export const loginStatusChangeEvent = payload =>{
  return { type: LOGIN_STATUS_CHANGE_EVENT, payload}
}
export const resetSignInFormCount = () =>{
  return { type: RESET_SIGNIN_FORM_COUNT}
}
export const successFailurePopUp = payload =>{
  return {type:SUCCESS_FAILURE_POPUP, payload}
}
export const Logout = () =>{
  return {type:LOGOUT}
}
export const addUser = payload =>{
  return {type:ADDUSER, payload}
}
export const getUser = payload =>{
  return {type:GETUSER, payload}
}
export const successFailurePopUpStatus = payload =>{
  return {type : SUCCESSFAILUREPOPUPSTATUS, payload}
}
