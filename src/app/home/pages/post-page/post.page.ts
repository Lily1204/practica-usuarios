import {  Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/store/reducers';
import * as FromPostActions from '../../../shared/store/actions/post.action';
import { Post } from '../../models/post';
import { getPosts } from 'src/app/shared/store/selectors/post.selectors';
@Component({
    selector: 'app-posts',
    templateUrl: './post.page.html',
    styleUrls: ['./post.page.scss']
})

export class PostPage implements OnInit {

    Post$: Observable<Post[]>;

    constructor (private store: Store<AppState>) {
        this.Post$ = this.store.select(getPosts);
       }
    ngOnInit() {
        this.store.dispatch(new FromPostActions.GETALLPOST);
    }
}
