import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

import { UserService } from '../../services';
import * as UsersActions from './user.actions';
import { getUsers } from './user.actions';
import { UsersState } from './user.reducer';
import { selectUsers } from './user.selector';

@Injectable()
export class UsersEffects {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<UsersState>
  ) {}

  getUsersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((value) => {
            return UsersActions.getUsersSuccess({
              value,
            });
          }),
          catchError((error) =>
            of(UsersActions.getUsersFail({ error: error.message }))
          )
        )
      )
    )
  );

  getUsersDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getUserDetail),
      map((a) => a[0]),
      withLatestFrom(this.store.select(selectUsers)),
      switchMap(([id, userList]) => {
        if (userList.length > 0) {
          return of(
            UsersActions.getUserDetailSuccess({
              value: userList.find((x) => x.id == id),
            })
          );
        }

        return this.userService.getUserById(id).pipe(
          map((value) => {
            return UsersActions.getUserDetailSuccess({
              value,
            });
          }),
          catchError((error) =>
            of(UsersActions.getUserDetailFail({ error: error.message }))
          )
        );
      })
    )
  );
}
