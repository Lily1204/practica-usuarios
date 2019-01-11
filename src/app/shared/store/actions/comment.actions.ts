import {Action } from '@ngrx/store';
import { Comment } from '../../../home/models/comment';

export enum AuthActionTyper {
    GET_ALL_COMMENT = '[comment] Get All',
    GET_ALL_SUCCES_COMMENT = '[comment] Get All Succes',
    GET_ALL_ERROR_COMMENT = '[comment] Get All Error'
}
 export class GETALLCOMMENT implements Action {
    readonly type = AuthActionTyper.GET_ALL_COMMENT;
 }

 export class GETALLSUCCESCOMMENT implements Action {
     readonly type = AuthActionTyper.GET_ALL_SUCCES_COMMENT;
    constructor(public payload: Comment[]) {}
}

 export class GETALLERRORCOMMENT implements Action {
     readonly type = AuthActionTyper.GET_ALL_ERROR_COMMENT;
     constructor(public payload: any) {}
 }

 export type Union =
                    GETALLCOMMENT |
                    GETALLSUCCESCOMMENT |
                    GETALLERRORCOMMENT;
