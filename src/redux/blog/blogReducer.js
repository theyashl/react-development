import { blogActionTypes } from "./actionTypes";

const initialState = {
    loader: false,
    blogData: [],
    error: ""
}

const blogReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case blogActionTypes.BLOG_DATA_INITIATE:
            return {
                ...state,
                loader: true
            };
        case blogActionTypes.BLOG_DATA_SUCCESS:
            return {
                ...state,
                loader: false,
                blogData: payload
            };
        case blogActionTypes.BLOG_DATA_FAILURE:
            return {
                ...state,
                loader: false,
                error: payload
            };
        case blogActionTypes.BLOG_DATA_RESET:
            return initialState;
        default:
            return state;
    }
}

export default blogReducer;
