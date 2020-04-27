import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const AUTHENTICATE_SUCCESS = '[Auth] Login Start';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const SIGNUP_START = '[Auth] Signup Start';
export const CLEAR_ERROR = '[Auth] Clear Error';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: { email: string, userId: string, token: string, expirationDate: Date }) {

  }
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor() {

  }
}

export class AutheticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: { email: string, password: string }) { }
}

export class AutheticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string) {

  }
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: { email: string, password: string }) {

  }
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export type AuthActions = Login | Logout | AutheticateSuccess | AutheticateFail | SignupStart | ClearError;

