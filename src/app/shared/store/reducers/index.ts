import * as FromUser from './userPage.reducers';
import * as FromPost from './post.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: FromUser.UsersState;
    posts: FromPost.PostsState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: FromUser.reducer,
    posts: FromPost.reducer
};

