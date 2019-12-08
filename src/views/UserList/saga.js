import { call, put, take, fork } from 'redux-saga/effects';
import * as nameConst from './const';
import * as nameAction from './action';

const delayConfig = ms => new Promise(resolve => setTimeout(resolve, ms));
const getCategoriesCallApi = () => {
  return delayConfig(1000)
    .then(() => {
      return {
        data: [
          { name_id: "5001S", type_food: 'Nái đẻ', total: 20, price: '3000000', price_total: '60000000', date_add: '18/12/2019' }
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
