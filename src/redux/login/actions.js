import { loginActionTypes } from './actionTypes';

export const loginSuccess = (data) => ({
    type: loginActionTypes.LOGIN_SUCCESS,
    payload: data
});

export const loginFailed = () => ({
    type: loginActionTypes.LOGIN_FAILED
});

export const logout = () => ({
    type: loginActionTypes.LOGOUT
});