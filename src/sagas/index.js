import { takeEvery } from "redux-saga/effects";


import {ADDUSER, GETUSER} from "../constants/action-types"


import workerSaga_addUser from "./api-saga/addUserSaga"
import workerSaga_getUser from "./api-saga/getUserSaga"

export default function* watcherSaga() {
  yield takeEvery(ADDUSER, workerSaga_addUser);
  yield takeEvery(GETUSER, workerSaga_getUser);
}






