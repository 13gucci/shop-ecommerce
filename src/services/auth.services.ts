import { API_ENDPOINTs } from 'src/constants/apiPath';
import { TLoginReponse, TRegisterResponse } from 'src/types/auth.type';
import { TCommonResponse } from 'src/types/common.type';
import httpClient from 'src/utils/https';

class AuthenticateService {
    private static instance: AuthenticateService;

    private constructor() {}

    public static getInstance(): AuthenticateService {
        if (!AuthenticateService.instance) {
            AuthenticateService.instance = new AuthenticateService();
        }
        return AuthenticateService.instance;
    }

    public register = (payload: { email: string; password: string }) => {
        return httpClient.post<TCommonResponse<TRegisterResponse>>(API_ENDPOINTs.REGISTER, payload);
    };

    public login = (payload: { email: string; password: string }) => {
        return httpClient.post<TCommonResponse<TLoginReponse>>(API_ENDPOINTs.LOGIN, payload);
    };

    public logout = () => {
        return httpClient.post(API_ENDPOINTs.LOGOUT);
    };
}

const authenticateSerivce = AuthenticateService.getInstance();
export default authenticateSerivce;
