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
    loadPost$: Observable<Action> = this.actions$.pipe(
        ofType(FromComment.AuthActionTyper. GET_ALL_COMMENT),
            map((action: FromComment.GETALLCOMMENT) => action.id),
            mergeMap(id =>
                this.commentService.getCommentById(id).pipe(
                    map((comments, id1) => new FromComment.GETALLSUCCESCOMMENT(id1, comments )),
                        catchError(error => of(new FromComment.GETALLERRORCOMMENT(error)))
                )
            )
    );
constructor( private commentService: CommentService,
    private actions$: Actions) {}
}
