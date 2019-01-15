import * as FromCommentAction from '../actions/comment.actions';
import { Comment } from '../../../home/models/comment';
import { Identifiers } from '@angular/compiler';

export interface CommentState {
    loading?: boolean;
    data?: Comment[];
    id: any;
    error?: any;
}
const initialState: CommentState = {
    loading: false,
    data: [],
    error: null,
    id: null
};

export function reducer (
    state: CommentState = initialState,
    action: FromCommentAction.Union
): CommentState {
    switch (action.type) {
        case FromCommentAction.AuthActionTyper.GET_ALL_COMMENT:
            return {...state, loading: true, error: null, id: action.id };

        case FromCommentAction.AuthActionTyper.GET_ALL_SUCCES_COMMENT:
           return {...state, loading: false, data: action.payload, id: action.id };

        case FromCommentAction.AuthActionTyper.GET_ALL_ERROR_COMMENT:
            return {...state, loading: false, error: action.payload.error};

        default:
            return state;
    }
}
