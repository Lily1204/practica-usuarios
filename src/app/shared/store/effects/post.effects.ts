import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import * as FromPostActions from '../actions/post.action';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { PostService } from '../../services/post.service';

@Injectable()
export class PostEffects {
    @Effect()

    loadPost$: Observable<Action> = this.actions$.pipe(
        ofType(FromPostActions.AuthActionTyper.GET_ALL_POST),
            map((action: FromPostActions.GETALLPOST) => action.id),
            mergeMap(id =>
                this.postService.getByIdUser(id).pipe(
                    map((posts, id1) => new FromPostActions.GETALLSUCCESPOST(id1, posts )),
                        catchError(error => of(new FromPostActions.GETALLERRORPOST(error)))
                )
            )
    );
constructor( private postService: PostService, private actions$: Actions) {}
}
