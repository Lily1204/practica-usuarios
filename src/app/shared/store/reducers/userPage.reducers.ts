import * as FromUserAction from '../actions/user.actions';
import { Users } from '../../../home/models/user';

export interface UsersState {
    loading?: boolean;
    data?: Users[];
    error?: any;
}
const initialState: UsersState = {
    loading: false,
    data: [],
    error: null
};

export function reducer (
    state: UsersState = initialState,
    action: FromUserAction.Union
): UsersState {
    switch (action.type) {
        case FromUserAction.AuthActionTyper.GET_ALL:
            return {...state, loading: true, error: null };
        case FromUserAction.AuthActionTyper.GET_ALL_SUCCES:
           return {...state, loading: false, data: action.payload };
        case FromUserAction.AuthActionTyper.GET_ALL_ERROR:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
}
