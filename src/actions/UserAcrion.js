import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';
const UserURL = "../mock_data/User.json";

export function fetchUsers(){
  return function(dispatch){
      axios.get(UserURL)
          .then((response) => {
              console.log('ddd',response.data)
              dispatch({type:ActionTypes.FETCH_USERS_SUCCESS, payload:response.data});
          })
          .catch((err) => {
              dispatch({type:ActionTypes.FETCH_USERS_ERROR, payload:err});
          })
  }
}

  
export const fetchUsersSuccess = users => ({
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload: { users }
});

export const fetchUsersError = error => ({
    type: ActionTypes.FETCH_USERS_ERROR,
    payload: { error }
});



