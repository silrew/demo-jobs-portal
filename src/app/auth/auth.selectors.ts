import { createFeatureSelector, createSelector } from '@ngrx/store';
import  { AuthState } from './reducers/index';

export const selectAuthstate = createFeatureSelector<AuthState>('auth')
 
export const isLoggedIn = createSelector(
    selectAuthstate,
    (auth)=>  !!auth.user
)


export const isLoggedOut = createSelector(
    isLoggedIn,
    isloggedin => !isloggedin
)