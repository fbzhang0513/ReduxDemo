/**
 *
 */

import * as TYPES from '../constants/actionTypes';
import {API_LOGIN} from '../constants/apis';


// fake user data
let fakeUser = {
    'account': 'fake_user',
};

export const userLogin = (account, password) => {
    return dispatch => {
        dispatch({'type': TYPES.ACTION_LOGIN_DOING});
        fetch(API_LOGIN)
            .then(res => {
                dispatch({'type': TYPES.ACTION_LOGIN_DONE, user: fakeUser});
            })
            .catch(error => {
                dispatch({'type': TYPES.ACTION_ERROR, error})
            });
    }
};


