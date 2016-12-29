/**
 * 根reducer
 */

import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {homeReducer} from './homeReducer';

let rootReducer = combineReducers({
    userReducer,
    homeReducer,
});

export default rootReducer;