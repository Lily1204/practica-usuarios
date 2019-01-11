import * as FromPostAction from '../actions/post.action';

import { Post } from 'src/app/home/models/post';

export interface PostsState {
    loading?: boolean;
    data?: Post[];
    error?: any;
}
const initialState: PostsState = {
    loading: false,
    data: [],
    error: null
};

export function reducer (
    state: PostsState = initialState,
    action: FromPostAction.Union
): PostsState {
    switch (action.type) {
        case FromPostAction.AuthActionTyper.GET_ALL_POST:
            return {...state, loading: true, error: null };
        case FromPostAction.AuthActionTyper.GET_ALL_SUCCES_POST:
           return {...state, loading: false, data: action.payload };
        case FromPostAction.AuthActionTyper.GET_ALL_ERROR_POST:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
}
