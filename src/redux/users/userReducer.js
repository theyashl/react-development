import { userActionTypes } from './actionTypes';

const initialState = {
    loader: false,
    userData: [],
    error: ""
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case userActionTypes.USER_DATA_INITIATE:
            return {
                ...state,
                loader: true
            }
        case userActionTypes.USER_DATA_SUCCESS:
            return {
                ...state,
                loader: false,
                userData: payload
            }
        case userActionTypes.USER_DATA_FAILURE:
            return {
                ...state,
                loader: false,
                error: payload
            }
        case userActionTypes.USER_DATA_RESET:
            return initialState
        default:
            return state
    }
}

export default userReducer;
