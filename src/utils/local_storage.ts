import { TUser } from 'src/types/user.type';

export const saveToLocalStorage = (token: string) => {
    localStorage.setItem('access_token', token);
};

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const getTokenFromLocalStorage = (token_name: string) => {
    const token = localStorage.getItem(token_name);
    return token ?? '';
};

export const getUserProfileFromLocalStorage = () => {
    const user = localStorage.getItem('user_profile');
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

export const saveUserProfileToLocalStorage = (user: TUser) => {
    localStorage.setItem('user_profile', JSON.stringify(user));
};
