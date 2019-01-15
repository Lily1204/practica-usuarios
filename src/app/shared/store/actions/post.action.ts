import {Action } from '@ngrx/store';
import { Post } from '../../../home/models/post';

export enum AuthActionTyper {
    GET_ALL_POST = '[post] Get All',
    GET_ALL_SUCCES_POST = '[post] Get All Succes',
    GET_ALL_ERROR_POST = '[post] Get All Error'
}
 export class GETALLPOST implements Action {
    readonly type = AuthActionTyper.GET_ALL_POST;
    constructor (public id: any) {}
 }

 export class GETALLSUCCESPOST implements Action {
     readonly type = AuthActionTyper.GET_ALL_SUCCES_POST;
    constructor(public id: any, public payload: Post[]) {}
}

 export class GETALLERRORPOST implements Action {
     readonly type = AuthActionTyper.GET_ALL_ERROR_POST;
     constructor(public payload: any) {}
 }

 export type Union =
                    GETALLPOST |
                    GETALLSUCCESPOST |
                    GETALLERRORPOST ;
