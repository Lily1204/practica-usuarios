import * as FromCommentAction from '../actions/comment.actions';
import { Comment } from '../../../home/models/comment';

export interface CommentState {
    loading?: boolean;
    data?: Comment[];
    error?: any;
}
const initialState: CommentState = {
    loading: false,
    data: [],
    error: null
};

export function reducer (
    state: CommentState = initialState,
    action: FromCommentAction.Union
): CommentState {
    switch (action.type) {
        case FromCommentAction.AuthActionTyper.GET_ALL_COMMENT:
            return {...state, loading: true, error: null };
        case FromCommentAction.AuthActionTyper.GET_ALL_SUCCES_COMMENT:
           return {...state, loading: false, data: action.payload };
        case FromCommentAction.AuthActionTyper.GET_ALL_ERROR_COMMENT:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
}
