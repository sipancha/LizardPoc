import { call, put } from "redux-saga/effects";

import getUser from "./../service/getUser"

import {FAILURE_RED, LOGIN_ERROR_MSG, LOGIN_STATUS_CHANGE_EVENT
  } from "./../../constants/action-types"
  
  import {successFailurePopUp} from "./../../actions/index"

function* workerSaga_getUser(action) {
  
    try {
      const payload = yield call(getUser, action.payload);
      const {userName, userPwd} = action.payload
      const {data} = payload
       
      if(data[0] && data[0].userName===userName && data[0].userPassword===userPwd){
        yield put({type : LOGIN_STATUS_CHANGE_EVENT, payload : data[0] })
      }else{
        yield put(successFailurePopUp({msg:LOGIN_ERROR_MSG, color:FAILURE_RED }))
      }
    } catch (e) {
      yield put(successFailurePopUp({msg:LOGIN_ERROR_MSG, color:FAILURE_RED }))
      
    }
    }


    export default workerSaga_getUser