/**
 * 根reducer
 */

import {combineReducers} from 'redux';
import {homeBundlesReducer} from './homeReducer';

let rootReducer = combineReducers({
    homeBundlesReducer,
});

export default rootReducer;