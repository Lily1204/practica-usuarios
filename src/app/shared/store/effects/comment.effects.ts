import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import * as FromComment from '../actions/comment.actions';

import { mergeMap, catchError, map } from 'rxjs/operators';
import { CommentService } from '../../services/comment.service';

@Injectable()
export class CommentEffects {
    @Effect()
    getAll$: Observable<Action> = this.actions$.pipe(
        ofType(
            FromComment.AuthActionTyper.GET_ALL_COMMENT),
            mergeMap(actions =>
                this.commentService.getAllComment().pipe(
                    map(comment => new FromComment.GETALLSUCCESCOMMENT(comment)),
                        catchError(error => of(new FromComment.GETALLERRORCOMMENT(error)))
                )
            )
    );
constructor( private commentService: CommentService,
    private actions$: Actions) {}
}
