import { all, call } from "redux-saga/effects";
import user from "./user";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3011/api';

export default function* rootSaga() {
  yield all([call(user)]);
}