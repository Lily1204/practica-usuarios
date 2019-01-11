import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import * as FromPostActions from '../actions/post.action';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { PostService } from '../../services/post.service';

@Injectable()
export class PostEffects {
    @Effect()
    getAllPosts$: Observable<Action> = this.actions$.pipe(
        ofType(
            FromPostActions.AuthActionTyper.GET_ALL_POST),
            mergeMap(actions =>
                this.postService.getAllPosts().pipe(
                    map(posts => new FromPostActions.GETALLSUCCESPOST(posts)),
                        catchError(error => of(new FromPostActions.GETALLERRORPOST(error)))
                )
            )
    );
constructor( private postService: PostService, private actions$: Actions) {}
}
