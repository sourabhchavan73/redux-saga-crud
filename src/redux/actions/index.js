import * as types from './types';

export const loadUserStart = () => ({
    type: types.LOAD_USER_START,
})

export const loadUserSuccess = (users) => ({
    type: types.LOAD_USER_SUCCESS,
    payload: users
})

export const loadUserFailed = (err) => ({
    type: types.LOAD_USER_FAILED,
    payload: err
})

// create user
export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user
})

export const createUserSuccess = () => ({
    type: types.CREATE_USER_SUCCESS
})

export const createUserFailed = (err) => ({
    type: types.CREATE_USER_FAILED,
    payload: err
})


// delete
export const deleteUserStart = (id) => ({
    type: types.DELETE_USER_START,
    payload: id
})

export const deleteUserSuccess = (id) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: id
})

export const deleteUserFailed = (err) => ({
    type: types.DELETE_USER_FAILED,
    payload: err
})

// update
export const updateUserStart = (id, user) => ({
    type: types.UPDATE_USER_START,
    payload:{
        id,
        user
    }
})

export const updateUserSuccess = () => ({
    type: types.UPDATE_USER_SUCCESS,
})

export const updateUserFailed = (err) => ({
    type: types.UPDATE_USER_FAILED,
    payload: err
})