import {
    SET_CURRENT_USER,
} from '../action_types';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

export const setCurrentUser = (data) => ({
    type: SET_CURRENT_USER,
    payload: {
        data,
        hasError: data ? false : true,
        isLoading: false
    }
});

export const signIn = (data) => async dispatch => {
    try {
        let res = await axios({
            method: 'POST',
            url: `/user/login`,
            data
        });
        let result = res.data.data;
        setAuthToken(result.accessToken);
        localStorage.setItem('user', JSON.stringify(result));
        dispatch(setCurrentUser(result));
    } catch (err) {
        dispatch(setCurrentUser(null));
    }
}
export const me = (data) => async dispatch => {
    try {
        let res = await axios({
            method: 'POST',
            url: `/user/me`,
            data
        });
        let result = res.data.data;
        setAuthToken(result.accessToken);
        localStorage.setItem('user', JSON.stringify(result));
        dispatch(setCurrentUser(result));
    } catch (err) {
        dispatch(setCurrentUser(null));
    }
}

export const checkInvite = (params) => async dispatch => {
    try {
        if (params) setAuthToken(params);
        let res = await axios({
            method: 'GET',
            url: `/user/check_invite`
        });
        let result = res.data.data;
        setAuthToken(result.accessToken);
        // localStorage.setItem('user', JSON.stringify(result));
        dispatch(setCurrentUser(result));
    } catch (err) {
        dispatch(setCurrentUser(null));
    }
}