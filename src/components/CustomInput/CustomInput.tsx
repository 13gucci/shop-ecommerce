import { InputHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

type CustomProps = {
    errorMessage?: string;
    rules?: RegisterOptions;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>;
    classNameError?: string;
    classNameInput?: string;
};

type Props = CustomProps & InputHTMLAttributes<HTMLInputElement>;

export default function CustomInput({
    register,
    name,
    className,
    errorMessage,
    rules,
    classNameInput = 'h-10 w-full rounded-sm border border-gray-300 px-3 text-sm outline-none placeholder:text-[13px] placeholder:text-gray-300 focus:border-[1px] focus:border-gray-600 focus:bg-gray-50 focus:shadow-sm',
    classNameError = 'mt-1 min-h-[1.5rem] text-[12px] text-textError',
    ...rest
}: Props) {
    const customRegister = register && name ? register(name, rules) : {};

    return (
        <div className={className}>
            {/* Field input */}
            <input className={classNameInput} {...rest} {...customRegister} />
            {/* Error message */}
            <div className={classNameError}>{errorMessage}</div>
        </div>
    );
}
