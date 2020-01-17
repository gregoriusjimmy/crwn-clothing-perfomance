import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// const middlewares = [logger];
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// export default store;
export default { store, persistor };