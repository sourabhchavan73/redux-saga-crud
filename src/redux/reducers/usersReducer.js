import * as types from '../actions/types';

const initialState = {
    users: {},
    loading: false,
    error : null
}


const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOAD_USER_START:
        case types.CREATE_USER_START:
        case types.DELETE_USER_START:
        case types.UPDATE_USER_START:
            return {
                ...state,
                loading: true
            };
        
        case types.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
            
        case types.CREATE_USER_SUCCESS:
       
            return {
                ...state,
                loading: false,
            };
            
        case types.UPDATE_USER_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                [action.payload.id]: action.payload };
        
        case types.DELETE_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                users: state.users.filter((user) => user.id !== action.payload)
            }

        case types.LOAD_USER_FAILED: 
        case types.CREATE_USER_FAILED:
        case types.DELETE_USER_FAILED:
        case types.UPDATE_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;