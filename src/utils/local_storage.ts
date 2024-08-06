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
