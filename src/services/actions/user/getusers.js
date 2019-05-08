import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from '../../key';

export const getUsers = () => ({ type: GET_USERS });

export const getUsersSuccess = users => ({ type: GET_USERS_SUCCESS, users });

export const getUsersFail = error => ({ type: GET_USERS_FAIL, message: error.message });
