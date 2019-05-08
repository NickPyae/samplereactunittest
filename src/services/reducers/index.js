import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from '../key';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case GET_USERS:
    return { ...state, users: [], loading: true };
  case GET_USERS_SUCCESS:
    return { ...state, users: action.users, loading: false };
  case GET_USERS_FAIL:
    return { ...state, message: action.message, loading: false };
  default:
    return state;
  }
};

export default reducer;
