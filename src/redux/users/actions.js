import { userActionTypes } from "./actionTypes";

export const userDataInitiate = () => ({
    type: userActionTypes.USER_DATA_INITIATE
});

export const userDataSuccess = (data) => ({
    type: userActionTypes.USER_DATA_SUCCESS,
    payload: data
});

export const userDataFailure = (error) => ({
    type: userActionTypes.USER_DATA_FAILURE,
    payload: error
});

export const userDataReset = () => ({
    type: userActionTypes.USER_DATA_RESET
});
