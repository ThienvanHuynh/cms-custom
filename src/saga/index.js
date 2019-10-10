import { all, fork } from 'redux-saga/effects';

import UserSaga from '../views/UserList/saga';

const merchantSaga = [fork(UserSaga)];

export default function* rootSaga() {
  yield all([...merchantSaga]);
}
