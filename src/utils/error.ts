import { AxiosError, HttpStatusCode, isAxiosError } from 'axios';
import { TCommonResponse } from 'src/types/common.type';

// Type Predicate
export function isUnprocessableEntityError<TFormData>(unkError: unknown): unkError is AxiosError<TFormData> {
    return isAxiosError(unkError) && unkError.response?.status === HttpStatusCode.UnprocessableEntity && unkError.response !== undefined;
}

type TCustomSetError = {
    err: unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setError: any;
};

export function customSetError<TFormData>({ err, setError }: TCustomSetError) {
    if (isUnprocessableEntityError<TCommonResponse<TFormData>>(err)) {
        const objErrorForm = err.response?.data.data;
        if (objErrorForm) {
            Object.keys(objErrorForm).forEach((key) => {
                setError(key as keyof TFormData, {
                    message: objErrorForm[key as keyof TFormData],
                    type: 'server'
                });
            });
        }
    }
}
