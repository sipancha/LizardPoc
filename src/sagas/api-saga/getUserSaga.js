import { call, put } from "redux-saga/effects";

import getUser from "./../service/getUser"

import {FAILURE_RED, LOGIN_ERROR_MSG, LOGIN_STATUS_CHANGE_EVENT
  } from "./../../constants/action-types"
  
import {successFailurePopUp} from "./../../actions/index"

import {loginConditionCheck} from "./../helper/index"

function* workerSaga_getUser(action) {
  
    try {
      const response = yield call(getUser, action.payload);
            
      if(loginConditionCheck(response,action.payload)){
        yield put({type : LOGIN_STATUS_CHANGE_EVENT, payload : response.data[0] })
      }else{
        yield put(successFailurePopUp({msg:LOGIN_ERROR_MSG, color:FAILURE_RED }))
      }
    } catch (e) {
      yield put(successFailurePopUp({msg:"Oops! Something went wrong in API", color:FAILURE_RED }))
      
    }
    }


    export default workerSaga_getUser