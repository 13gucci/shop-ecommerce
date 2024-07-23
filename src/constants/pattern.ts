export const REGISTER_PATTERNS = {
    email: {
        MIN_LENGTH: 5,
        MAX_LENGTH: 160,
        REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
        MIN_LENGTH: 6,
        MAX_LENGTH: 160
    }
} as const;
