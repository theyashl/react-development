import { blogActionTypes } from "./actionTypes"

export const blogDataInitiate = () => ({
    type: blogActionTypes.BLOG_DATA_INITIATE
});

export const blogDataSuccess = (data) => ({
    type: blogActionTypes.BLOG_DATA_SUCCESS,
    payload: data
});

export const blogDataFailure = (error) => ({
    type: blogActionTypes.BLOG_DATA_FAILURE,
    payload: error
});

export const blogDataReset = () => ({
    type: blogActionTypes.BLOG_DATA_RESET
});