import axios, { AxiosInstance, isAxiosError, HttpStatusCode } from 'axios';
import { isUnprocessableEntityError } from './error';
import toast from 'react-hot-toast';

class HttpClient {
    private static instance: HttpClient;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: import.meta.env.VITE_BASE_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        this.axiosInstance.interceptors.request.use(
            function (config) {
                // Do something before request is sent
                return config;
            },
            function (error) {
                // Do something with request error
                return Promise.reject(error);
            }
        );

        this.axiosInstance.interceptors.response.use(
            function (response) {
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
