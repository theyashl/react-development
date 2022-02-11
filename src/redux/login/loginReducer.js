import { loginActionTypes } from './actionTypes';

const initialState = {
    loggedIn: localStorage.getItem('loggedIn'),
    username: localStorage.getItem('username'),
    password: localStorage.getItem('password')
}

const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case loginActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                username: payload.email,
                password: payload.password
            };
        case loginActionTypes.LOGIN_FAILED:
            return state;
        case loginActionTypes.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                username: "",
                password: ""
            }
        default:
            return state;
    }
}

export default loginReducer;
