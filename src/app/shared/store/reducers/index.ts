import * as FromUser from './userPage.reducers';
import * as FromComment from './comment.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: FromUser.UsersState;
    comments: FromComment.CommentState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: FromUser.reducer,
    comments: FromComment.reducer
};

