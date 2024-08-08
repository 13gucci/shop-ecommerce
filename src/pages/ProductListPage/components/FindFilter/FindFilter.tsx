import React from 'react';

type Props = {
    listFilter: string[];
    title: string;
    className?: string;
};

export default function FindFilter({ listFilter, title, className }: Props) {
    return (
        <div className={className}>
            <div className='text-sm font-semibold capitalize text-gray-800'>{title}</div>
            <ul>
                {listFilter.map((item, index) => (
                    <li key={index} className='my-3 flex items-start space-x-2 text-sm leading-tight'>
                        <input id={`${index}`} type='checkbox' className='mt-1' />
                        <label htmlFor={`${index}`}>{item}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
