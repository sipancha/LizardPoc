import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import {ADDUSER, SIGNINFORM_SUCCESS_MSG, SUCCESS_GREEN, FAILURE_RED, 
  SIGNINFORM_ERROR_MSG, GETUSER, LOGIN_ERROR_MSG, LOGIN_STATUS_CHANGE_EVENT
} from "./../constants/action-types"
import {successFailurePopUp} from "./../actions/index"


export default function* watcherSaga() {
    
  yield takeEvery(ADDUSER, workerSaga_addUser);
  yield takeEvery(GETUSER, workerSaga_getUser);
}
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

function getUser(loginInfo) {
  console.log(loginInfo)
  return axios.get("/getUser", {
    params: {
      userName: loginInfo.userName
    }
  })
}

function* workerSaga_addUser(action) {
    //alert("worker")
  try {
    yield call(addUser, action.payload);
    yield put(successFailurePopUp({msg:SIGNINFORM_SUCCESS_MSG, color:SUCCESS_GREEN }))
  } catch (e) {
    yield put(successFailurePopUp({msg:SIGNINFORM_ERROR_MSG, color:FAILURE_RED }))
    
  }
}

function addUser(userInfo) {
    console.log(userInfo)
    return axios.post("/addUser", userInfo)
}