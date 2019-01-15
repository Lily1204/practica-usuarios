import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/store/reducers';
import * as FromPostActions from '../../../shared/store/actions/post.action';
import { Post } from '../../models/post';
import { getPostId } from 'src/app/shared/store/selectors/post.selectors';
import { getUserById } from 'src/app/shared/store/selectors/user.selector';
import { Users } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-posts',
    templateUrl: './post.page.html',
    styleUrls: ['./post.page.scss']
})

export class PostPage implements OnInit {

    Post$: Observable<Post[]>;
    User$: Observable<Users>;
    id: any;

    constructor(private store: Store<AppState>, private route: ActivatedRoute) {
        this.id = this.route.snapshot.paramMap.get('id');
        this.User$ = this.store.select(getUserById(this.id));
        this.Post$ = this.store.select(getPostId(this.id));
    }

    ngOnInit() {
        this.store.dispatch(new FromPostActions.GETALLPOST(this.id));
    }
}
