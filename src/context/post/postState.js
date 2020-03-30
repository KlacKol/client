import React, {useReducer} from "react";
import {PostReducer} from "./postReducer";
import {PostContext} from "./postContext";
import {GET_POST, LOGIN, LOGOUT} from "../types";
import {PostService} from "../../Services/PostService";
import LocalStorageService from "../../Services/LocalStorageService";

export const PostState = ({children}) => {

    const initialState = {
        posts: [],
        auth: false
    };

    const [state, dispatch] = useReducer(PostReducer, initialState);

    const getPosts = async () => {
        await PostService.getPosts().then(res => {
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        })
    };

    const login = (token, userId) => {
        LocalStorageService.setToken(token);
        LocalStorageService.setIdUser(userId);
        dispatch({type: LOGIN})
    };
    const logout = () => {
        LocalStorageService.clearToken();
        LocalStorageService.clearIdUser();
        dispatch({type: LOGOUT})
    };

    const {posts, auth} = state;

    return (
        <PostContext.Provider value={{login, logout, getPosts, posts, auth}}>
            {children}
        </PostContext.Provider>
    )
};