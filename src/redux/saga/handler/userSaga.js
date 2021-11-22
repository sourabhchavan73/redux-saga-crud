import {
    takeEvery,
    takeLatest,
    take,
    put,
    delay,
    fork,
    call
} from 'redux-saga/effects';


import { loadUserAPI, createUserAPI, deleteUserAPI, updateUserAPI } from '../../../apis/user';
import { deleteUserSuccess, deleteUserFailed, loadUserFailed, loadUserSuccess, createUserSuccess, createUserFailed, updateUserSuccess } from '../../actions';
import * as types from '../../actions/types'

export function* onLoadUserStartAsync(){
    try{
        const response = yield call(loadUserAPI)
        
        if (response.status === 200){
            yield delay(500);
            yield put(loadUserSuccess(response.data))
        } 
    }
    catch (error){
        yield put(loadUserFailed(error.response.data))
    }
};

export function* onLoaduser(){
    yield takeEvery(types.LOAD_USER_START, onLoadUserStartAsync)
};

function* onCreateUserStartAsync(action){
    try{
        const response = yield call (createUserAPI, action.payload);

        if(response.status === 200){
            yield put(createUserSuccess(response.data))
        }
    }
    catch (error){
        yield put(createUserFailed(error.response.data))
    }
}

function* onCreateuser(){
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
};

function* onDeleteUserStartAsync(action){
    // try{
    //     const response = yield call(deleteUserAPI , id);
    //     if(response.status === 200){
    //         yield delay(500);
    //         yield put(deleteUserSuccess(id))
    //     }
    // }
    // catch (error){
    //     yield put(deleteUserFailed(error.response.data))
    // }
    try{
        const response = yield call(deleteUserAPI, action.payload)
        if (response.status === 200){
            yield delay(5000);
            yield put(deleteUserSuccess(action.payload))

        }
    }
    catch (error){
        yield put(deleteUserFailed(error.response.data))
    }
    
}

function* onDeleteuser(){
    // while(true){
    //     const {payload: id} = yield take(types.DELETE_USER_START)
    //     yield call(onDeleteUserStartAsync, id)
    // }

    yield takeLatest(types.DELETE_USER_START, onDeleteUserStartAsync)
};


//  update
function* onUpdateUserStartAsync(action){
    try{
        const response = yield call(updateUserAPI, action.payload.id, action.payload.user)
        if(response.status === 200){
            yield delay(500);
            yield put(updateUserSuccess())
        }
    }
    catch(error){
        
    }
}

function* onUpdateuser(){
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync)
};

const userSagas = [
    fork(onLoaduser),
    fork(onCreateuser),
    fork(onDeleteuser),
    fork(onUpdateuser)
];

export default userSagas;