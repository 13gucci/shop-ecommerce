import { TUser } from './user.type';

export type TRegisterResponse = {
    access_token: string;
    expires: number;
    refresh_token: string;
    expires_refresh_token: number;
    user: TUser;
};

export type TLoginReponse = TRegisterResponse;
