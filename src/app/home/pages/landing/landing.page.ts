import {  Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/store/reducers';
import { getUsers } from '../../../shared/store/selectors/user.selector';
import * as FromUserActions from '../../../shared/store/actions/user.actions';
@Component({
    selector: 'landing',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss']
})

export class LandingPage implements OnInit {

    User$: Observable<Users[]>;

    constructor (private store: Store<AppState>) {
        this.User$ = this.store.select(getUsers);
       }
    ngOnInit() {
        this.store.dispatch(new FromUserActions.GETALL);
    }
}
