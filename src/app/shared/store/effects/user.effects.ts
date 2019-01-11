import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import * as FromUser from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { AppState } from '../reducers';
import { mergeMap, catchError, map } from 'rxjs/operators';

@Injectable()
export class UserEffects {
    @Effect()
    getAll$: Observable<Action> = this.actions$.pipe(
        ofType(
            FromUser.AuthActionTyper.GET_ALL),
            mergeMap(actions =>
                this.userService.getAll().pipe(
                    map(users => new FromUser.GETALLSUCCES(users)),
                        catchError(error => of(new FromUser.GETALLERROR(error)))
                )
            )
    );
constructor( private userService: UserService, private actions$: Actions, private store: Store<AppState>) {}
}
