import {Action } from '@ngrx/store';
import { Users } from '../../../home/models/user';

export enum AuthActionTyper {
    GET_ALL = '[users] Get All',
    GET_ALL_SUCCES = '[users] Get All Succes',
    GET_ALL_ERROR = '[users] Get All Error'
}
 export class GETALL implements Action {
    readonly type = AuthActionTyper.GET_ALL;
 }

 export class GETALLSUCCES implements Action {
     readonly type = AuthActionTyper.GET_ALL_SUCCES;
    constructor(public payload: Users[]) {}
}

 export class GETALLERROR implements Action {
     readonly type = AuthActionTyper.GET_ALL_ERROR;
     constructor(public payload: any) {}
 }

 export type Union =
                    GETALL |
                    GETALLSUCCES |
                    GETALLERROR ;
