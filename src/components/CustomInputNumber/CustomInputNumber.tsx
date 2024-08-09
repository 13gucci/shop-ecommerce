import { forwardRef, InputHTMLAttributes, useState } from 'react';

type CustomProps = {
    errorMessage?: string;
    classNameError?: string;
    classNameInput?: string;
};

type Props = CustomProps & InputHTMLAttributes<HTMLInputElement>;

const CustomInputNumber = forwardRef<HTMLInputElement, Props>(function InputNumberInner(
    {
        errorMessage,
        className,
        classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
        classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
        onChange,
        value,
        ...rest
    },
    ref
) {
    const [localValue, setLocalValue] = useState<string>(value as string);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (/^\d+$/.test(value) || value === '') {
            // Thực thi onChange callback từ bên ngoài truyền vào props
            onChange && onChange(event);
            // Cập nhật localValue state
            setLocalValue(value);
        }
    };
    return (
        <div className={className}>
            <input
                className={classNameInput}
                onChange={handleChange}
                value={value === undefined ? localValue : value}
                {...rest}
                ref={ref}
            />
            <div className={classNameError}>{errorMessage}</div>
        </div>
    );
});

export default CustomInputNumber;
