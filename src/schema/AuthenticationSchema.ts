import { ERROR_MESSAGES } from 'src/constants/errorMessages';
import { REGISTER_PATTERNS } from 'src/constants/pattern';
import * as yup from 'yup';

export const RegisterSchema = yup.object({
    email: yup
        .string()
        .required(ERROR_MESSAGES.NOT_BLANK)
        .min(REGISTER_PATTERNS.email.MIN_LENGTH, ERROR_MESSAGES.INVALID_LENGTH_EMAIL)
        .max(REGISTER_PATTERNS.email.MAX_LENGTH, ERROR_MESSAGES.INVALID_LENGTH_EMAIL)
        .matches(REGISTER_PATTERNS.email.REGEX, ERROR_MESSAGES.INVALID_EMAIL),
    password: yup
        .string()
        .required(ERROR_MESSAGES.NOT_BLANK)
        .min(REGISTER_PATTERNS.password.MIN_LENGTH, ERROR_MESSAGES.INVALID_LENGTH_PASSWORD)
        .max(REGISTER_PATTERNS.password.MAX_LENGTH, ERROR_MESSAGES.INVALID_LENGTH_PASSWORD),
    confirm_password: yup
        .string()
        .required(ERROR_MESSAGES.NOT_BLANK)
        .oneOf([yup.ref('password')], ERROR_MESSAGES.NOT_MATCH_CONFIRM_PASSWORD)
});

export const LoginSchema = RegisterSchema.omit(['confirm_password']);

export type RegisterFormType = yup.InferType<typeof RegisterSchema>;
export type LoginFormType = yup.InferType<typeof LoginSchema>;
