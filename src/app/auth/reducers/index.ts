import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer, on 
} from '@ngrx/store';
import { AuthActions } from 'src/app/auth/action-types';
import { User } from 'src/app/auth/models/user';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialAutstate : AuthState= {
  user: undefined
}
export const authReducer = createReducer(
  initialAutstate, 
  on(AuthActions.loginAction,(state, action) =>{
    return {
      user: action.user
    }
  }),
  on(AuthActions.logoutAction, (state, action)=> {
    return {
      user: undefined
    }
  })
)

