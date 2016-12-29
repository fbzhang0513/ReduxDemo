/**
 * homeReducer
 */

import * as TYPES from '../constants/actionTypes';

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    user: {},
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ACTION_LOGIN_DOING:
            return initialState;
        case TYPES.ACTION_LOGIN_DONE:
            return {
                isLoggedIn: true,
                isLoading: false,
                user: action.user,
            };
        default:
            return state;
    }
};