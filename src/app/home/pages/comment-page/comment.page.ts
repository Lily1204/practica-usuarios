import {  Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/store/reducers';

import * as FromCommentActions from '../../../shared/store/actions/comment.actions';
import { getComment } from 'src/app/shared/store/selectors/comment.selector';
@Component({
    selector: 'comment-page',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss']
})

export class CommentPage implements OnInit {

    Comment$: Observable<Comment[]>;

    constructor (private store: Store<AppState>) {
        this.Comment$ = this.store.select(getComment);
       }
    ngOnInit() {
        this.store.dispatch(new FromCommentActions.GETALLCOMMENT);
    }
}
