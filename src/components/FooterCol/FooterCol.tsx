import React from 'react';

type Props = {
    children?: React.ReactNode;
    title?: string;
};

export default function FooterCol({ children, title }: Props) {
    return (
        <div className='text-[12px]'>
            <div className='uppercase my-5 font-bold'>{title}</div>
            {children}
        </div>
    );
}
