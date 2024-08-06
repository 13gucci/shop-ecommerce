import { createContext, Dispatch, useReducer } from 'react';
import { TUser } from 'src/types/user.type';
import { getTokenFromLocalStorage } from 'src/utils/local_storage';

type Props = {
    children: React.ReactNode;
};

type TStateReducer = {
    isAuthenticated: boolean;
    userProfile: TUser | null;
};

type TActionReducer =
    | {
          type: 'SET_AUTHENTICATED';
          payload: boolean;
      }
    | {
          type: 'SET_USER_PROFILE';
          payload: TUser;
      };

type TAuthContext = {
    auth: TStateReducer;
    dispatch: Dispatch<TActionReducer>;
};

const initialStateContext = {
    auth: {
        isAuthenticated: Boolean(getTokenFromLocalStorage('access_token')),
        userProfile: null
    },
    dispatch: () => {}
};

export const AuthContext = createContext<TAuthContext>(initialStateContext);

const reducer = (state: TStateReducer, action: TActionReducer) => {
    switch (action.type) {
        case 'SET_AUTHENTICATED':
            return { ...state, isAuthenticated: action.payload };
        case 'SET_USER_PROFILE':
            return { ...state, userProfile: action.payload };
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
