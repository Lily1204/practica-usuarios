import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index';


const postsState = (state: AppState) => state.posts;

export const isLoadingPost = createSelector(
    postsState,
    state => state.loading
);

export const getPosts = createSelector (
    postsState,
    state => state.data
);

export const getPostId = (id) => createSelector (
    postsState,
    state => state.data.filter(user => {
        return user.userId = id;
    })
);
