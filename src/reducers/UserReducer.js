import ActionTypes from '../constants/ActionTypes';

const initialState = {
   users: [],
  error: null
}

export default function userreducer(state = initialState, action){

    switch(action.type){
        case ActionTypes.FETCH_USERS_SUCCESS:{
            return {
                ...state,
                users: action.payload
            };
        }
        case ActionTypes.FETCH_USERS_ERROR:{
            return {
                ...state,
                error: action.payload,
                
            }
        }
        default:
        return state;
    }
}