import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/models';

export const getUsers = createAction('[Users] Get Users');

export const getUsersFail = createAction(
  '[Users] Get Users Failed',
  props<{ error: string }>()
);

export const getUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ value: User[] }>()
);

export const getUserDetail = createAction(
  '[Users] Get User Detail',
  props<{ id: number }>()
);

export const getUserDetailFail = createAction(
  '[Users] Get User Detail Failed',
  props<{ error: string }>()
);

export const getUserDetailSuccess = createAction(
  '[Users] Load User Detail Success',
  props<{ value: User | undefined }>()
);
