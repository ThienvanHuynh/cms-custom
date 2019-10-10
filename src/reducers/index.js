import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import reducerUser from '../views/UserList/reducer';

const merchantReducer = {
  router: connectRouter(history),
  reducerUser,
  reduTest: 'aaa',
  aaa: 'bbb'
};
const rootReducer = () => combineReducers({ ...merchantReducer });

export default rootReducer;
