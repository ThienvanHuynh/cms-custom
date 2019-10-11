import { fromJS } from 'immutable';
import * as nameConst from './const';

const initState = fromJS({
  ListUser: null
});
const reducerUser = (state = initState, action) => {
  switch (action.type) {
    case nameConst.GET_LIST_USER_SUCCESS:
      return state.set('ListUser', action.payload);
    default:
      return state;
  }
};
export default reducerUser;
