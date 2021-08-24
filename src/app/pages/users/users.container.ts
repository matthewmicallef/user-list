import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';

import { getUsers, selectUsers, UsersState } from 'src/app/state/user';

@Component({
  selector: 'users',
  templateUrl: './users.container.html',
  styleUrls: ['./users.container.scss'],
})
export class UsersContainer implements OnInit {
  userList: Observable<User[]>;

  constructor(private store: Store<UsersState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());

    this.userList = this.store.select(selectUsers);
  }

  trackByUser = (_: number, id: number) => `user-${id}`;
}
