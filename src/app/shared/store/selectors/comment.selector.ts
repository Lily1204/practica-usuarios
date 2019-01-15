import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index';


const commentState = (state: AppState) => state.comments;

export const isLoadingComment = createSelector(
    commentState,
    state => state.loading
);

export const getComment = createSelector (
    commentState,
    state => state.data
);
export const getCommentId = (id) => createSelector (
    commentState,
    state => state.data.filter(user => {
        return user.postId == id;
    })
);
