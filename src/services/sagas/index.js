import { put, takeLatest, all } from 'redux-saga/effects';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from '../key';

export function* fetchUsers() {
  try {
    const json = yield fetch('https://reqres.in/api/users')
      .then(response => response.json());
    yield put({ type: GET_USERS_SUCCESS, users: json.data });
  } catch (error) {
    yield put({ type: GET_USERS_FAIL, messsage: error });
  }
}

function* actionWatcher() {
  yield takeLatest(GET_USERS, fetchUsers);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
