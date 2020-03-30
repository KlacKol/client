import {GET_POST, LOGIN, LOGOUT} from "../types";

const handlers = {
    [GET_POST]: (state, {payload}) => ({...state, posts: payload}),
    [LOGIN]: (state) => ({...state, auth: true}),
    [LOGOUT]: (state) => ({...state, auth: false}),
    DEFAULT: state => state
};

export const PostReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
};