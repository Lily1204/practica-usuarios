import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/store/reducers';

import * as FromCommentActions from '../../../shared/store/actions/comment.actions';
import { getComment } from 'src/app/shared/store/selectors/comment.selector';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'comment-page',
    templateUrl: './comment.page.html',
    styleUrls: ['./comment.page.scss']
})

export class CommentPage implements OnInit {
    panelOpenState = false;
    Comments$: Observable<Comment[]>;
    id: any;
    comment: Comment[];

    constructor(private store: Store<AppState>,
        private route: ActivatedRoute) {
        this.id = this.route.snapshot.params.id;
        this.Comments$ = this.store.select(getComment);
    }
    ngOnInit() {
        this.store.dispatch(new FromCommentActions.GETALLCOMMENT(this.id));

    }
}

