import { call, put } from "redux-saga/effects";

import addUser from "./../service/addUser"

import {SIGNINFORM_SUCCESS_MSG, SUCCESS_GREEN, FAILURE_RED, 
    SIGNINFORM_ERROR_MSG  } from "./../../constants/action-types"
  
  import {successFailurePopUp} from "./../../actions/index"

function* workerSaga_addUser(action) {
    //alert("worker")
  try {
    yield call(addUser, action.payload);
    yield put(successFailurePopUp({msg:SIGNINFORM_SUCCESS_MSG, color:SUCCESS_GREEN }))
  } catch (e) {
    yield put(successFailurePopUp({msg:SIGNINFORM_ERROR_MSG, color:FAILURE_RED }))
    
  }
}

export default workerSaga_addUser