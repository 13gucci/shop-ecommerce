import { createContext, Dispatch, useReducer } from 'react';
import { TUser } from 'src/types/user.type';
import { getTokenFromLocalStorage, getUserProfileFromLocalStorage } from 'src/utils/local_storage';

type Props = {
    children: React.ReactNode;
};

type TStateReducer = {
    isAuthenticated: boolean;
    userProfile: TUser | null;
};

type TActionReducer =
    | {
          type: 'LOGIN';
          payload: {
              isLoggedIn: boolean;
              userProfile: TUser | null;
          };
      }
    | {
          type: 'LOGOUT';
      };

type TAuthContext = {
    auth: TStateReducer;
    dispatch: Dispatch<TActionReducer>;
};

const initialStateContext = {
    auth: {
        isAuthenticated: Boolean(getTokenFromLocalStorage('access_token')),
        userProfile: getUserProfileFromLocalStorage()
    },
    dispatch: () => {}
};

export const AuthContext = createContext<TAuthContext>(initialStateContext);

const reducer = (state: TStateReducer, action: TActionReducer) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: action.payload.isLoggedIn, userProfile: action.payload.userProfile };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, userProfile: null };
        default:
            return state;
    }
};

const AuthProvider = ({ children }: Props) => {
    const [auth, dispatch] = useReducer(reducer, {
        isAuthenticated: initialStateContext.auth.isAuthenticated,
        userProfile: initialStateContext.auth.userProfile
    });

    const authContext = {
        auth,
        dispatch
    };
    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
