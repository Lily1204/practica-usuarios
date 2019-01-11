import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index';


const usersState = (state: AppState) => state.users;

export const isLoadingUsers = createSelector(
    usersState,
    state => state.loading
);

export const getUsers = createSelector (
    usersState,
    state => state.data
);

export const getUserById = (id) => createSelector (
    usersState,
    state => state.data.find(user => {
        return user.id = id;
    })
);
