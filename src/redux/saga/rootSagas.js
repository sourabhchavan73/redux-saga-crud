import {  all } from 'redux-saga/effects';

import userSagas from "./handler/userSaga";

export default function* watcherSaga(){
    yield all([...userSagas])
}