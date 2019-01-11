import * as FromUser from './userPage.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: FromUser.UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: FromUser.reducer,
};

