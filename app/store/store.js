/**
 * Store
 */

import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootRudcer';


const middlewares = [
    thunk,
];
if (process.env.NODE_ENV === 'development') {
    // 仅在开发环境应用中间件logger
    const logger = createLogger();
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer, undefined, autoRehydrate());
persistStore(store, {storage: AsyncStorage});

export default store;