import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from '../reducers';
import rootSaga from '../saga';
import history from '../history';

const storeConfig = () => {
  const sagaMiddleware = createSagaMiddleware();
  const routesMiddleware = routerMiddleware(history);

  const middlewares = [sagaMiddleware, routesMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];
  let composeEnhancers = compose;

  const store = createStore(rootReducer(), composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);

  return store;
};

export default storeConfig;
