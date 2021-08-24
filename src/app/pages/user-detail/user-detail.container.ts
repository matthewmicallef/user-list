import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models';

import {
  getUserDetail,
  selectUserDetail,
  UsersState,
} from 'src/app/state/user';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.container.html',
  styleUrls: ['./user-detail.container.scss'],
})
export class UserDetailContainer implements OnInit {
  user: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<UsersState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.store.dispatch(getUserDetail(params.id))
    );

    this.user = this.store
      .select(selectUserDetail)
      .pipe(tap((x) => console.log('>>>>>', x)));
  }
}
