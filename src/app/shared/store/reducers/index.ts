import * as FromUser from './userPage.reducers';
import * as FromComment from './comment.reducers';
import * as FromPost from './post.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: FromUser.UsersState;
    comments: FromComment.CommentState;
    posts: FromPost.PostsState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: FromUser.reducer,
    comments: FromComment.reducer,
    posts: FromPost.reducer
};

