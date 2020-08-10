import { createAction, props, Action } from '@ngrx/store';
import { User } from './models/user'


export const loginAction = createAction(
  '[login page] user logs in',
  props<{ user: User }>()
);

export const logoutAction = createAction(
'[top menu] logout Action'
)

