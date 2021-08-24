import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersState, usersFeatureKey } from './user.reducer';
import { getUserDetail, getUserDetailSuccess, getUsers } from './user.actions';

const getUsersState = createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUsers = createSelector(
  getUsersState,
  (state) => state.users
);

export const selectUserDetail = createSelector(
  getUsersState,
  (state) => state.currentUser
);

export const selectUsersViewModel = createSelector(getUsers, (userList) => ({
  userList,
}));
