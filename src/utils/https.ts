import axios, { AxiosInstance, HttpStatusCode, isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { clearLocalStorage, getTokenFromLocalStorage, saveToLocalStorage, saveUserProfileToLocalStorage } from 'src/utils/local_storage';

class HttpClient {
    private static instance: HttpClient;
    private axiosInstance: AxiosInstance;
    private access_token: string;

    private constructor() {
        this.access_token = getTokenFromLocalStorage('access_token');
        this.axiosInstance = axios.create({
            baseURL: import.meta.env.VITE_BASE_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        this.axiosInstance.interceptors.request.use(
            (config) => {
                // Do something before request is sent
                if (this.access_token) {
                    config.headers.Authorization = this.access_token;
                }
                return config;
            },
            function (error) {
                // Do something with request error
                return Promise.reject(error);
            }
        );

        // Block to manage response if error is not 422 then toast
        this.axiosInstance.interceptors.response.use(
            (response) => {
                const { url } = response.config;
                if (url && ['login', 'register'].includes(url)) {
                    this.access_token = response.data.data.access_token;
                    saveToLocalStorage(this.access_token);
                    saveUserProfileToLocalStorage(response.data.data.user);
                } else if (url && url === 'logout') {
                    this.access_token = '';
                    clearLocalStorage();
                }
                return response;
            },
            function (error) {
                if (isAxiosError(error)) {
                    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
                        const data: any | undefined = error.response?.data;
                        const message = data.message || error.message;
                        return toast.error(message, {
                            position: 'top-right'
                        });
                    }
                }
                return Promise.reject(error);
            }
        );
    }

    public static getInstance(): AxiosInstance {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient();
        }
        return HttpClient.instance.axiosInstance;
    }
}

const httpClient = HttpClient.getInstance();

export default httpClient;
