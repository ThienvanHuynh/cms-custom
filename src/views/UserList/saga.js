import { call, put, take, fork } from 'redux-saga/effects';
import * as nameConst from './const';
import * as nameAction from './action';

const delayConfig = ms => new Promise(resolve => setTimeout(resolve, ms));
const getCategoriesCallApi = () => {
  return delayConfig(1000)
    .then(() => {
      return {
        data: [
          { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
          { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
          { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
          { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
          { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
          { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
          { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
          { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
          { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
          { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
          { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
          { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
          { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
          { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' }
        ]
      };
    })
    .catch(() => {
      return { errMess: 'Lỗi rồi.' };
    });
};

function* getListUserSaga() {
  while (true) {
    const { params } = yield take(nameConst.GET_LIST_USER);
    const { data } = yield call(getCategoriesCallApi, params);
    if (data) {
      yield put(nameAction.getListUserSuccess(data));
    }
  }
}
export default function* root() {
  yield fork(getListUserSaga);
}
