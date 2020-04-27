import { User } from '../user.model';
import * as AuthActions from './auth.action';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  loading: null
};

export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
      return {
        ...state,
        user,
        authError: null,
        loading: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    case AuthActions.AUTHENTICATE_SUCCESS:
    case AuthActions.SIGNUP_START:
      return {
        ...state,
        authError: null
      };
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      };
    case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
}
