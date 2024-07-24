import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

type Props = {
    type: HTMLInputTypeAttribute;
    errorMessage?: string;
    placeholder?: string;
    className?: string;
    name: string;
    autoComplete: HTMLInputAutoCompleteAttribute;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
};

export default function CustomInput({ type, name, autoComplete, register, className, errorMessage, placeholder }: Props) {
    return (
        <div className={className}>
            {/* Field input */}
            <input
                autoComplete={autoComplete}
                type={type}
                placeholder={placeholder}
                className='h-10 w-full rounded-sm border border-gray-300 px-3 text-sm outline-none placeholder:text-[13px] placeholder:text-gray-300 focus:border-[1px] focus:border-gray-600 focus:bg-gray-50 focus:shadow-sm'
                {...register(name)}
            />
            {/* Error message */}
            <div className='mt-1 min-h-[1.5rem] text-[12px] text-textError'>{errorMessage}</div>
        </div>
    );
}
