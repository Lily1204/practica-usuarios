import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index';

const usersState = (state: AppState) => state.users;

export const getUsers = createSelector (
    usersState,
    state => state.data
);
