import { Action, createReducer, on } from '@ngrx/store';

import { User } from 'src/app/models';

import * as UsersActions from './user.actions';

export const usersFeatureKey = 'users';

export interface UsersState {
  users: User[];
  currentUser: User;
  isLoading: boolean;
  error: string;
}

export const initialState: UsersState = {
  users: [],
  currentUser: null,
  isLoading: false,
  error: '',
};

export const UsersReducer = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({
    ...state,
    isLoading: true,
    error: '',
  })),
  on(UsersActions.getUsersSuccess, (state, { value }) => ({
    ...state,
    users: value,
    isLoading: false,
  })),
  on(UsersActions.getUsersFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(UsersActions.getUserDetail, (state) => ({
    ...state,
    isLoading: true,
    error: '',
  })),
  on(UsersActions.getUserDetailSuccess, (state, { value }) => ({
    ...state,
    currentUser: value,
    isLoading: false,
  })),
  on(UsersActions.getUserDetailFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);

export function reducer(state: UsersState, action: Action) {
  return UsersReducer(state, action);
}
