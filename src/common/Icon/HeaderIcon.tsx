type Props = {
    className?: string;
};

export function GlobalIcon({ className = 'h-4 w-4' }: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={className}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
            />
        </svg>
    );
}

export function QuestionMarkIcon({ className = 'h-4 w-4' }: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={className}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
            />
        </svg>
    );
}
export function BellIcon({ className = 'h-4 w-4' }: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={className}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
            />
        </svg>
    );
}

export function ChevronIcon({ className = 'h-4 w-4' }: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={className}
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
    );
}

export function SearchIcon({ className = 'h-4 w-4' }: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={className}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
        </svg>
    );
}

export function CartIcon({ className = 'h-4 w-4' }: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={className}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
            />
        </svg>
    );
}

export function ChevronLeft({ className = 'h-4 w-4', color = '#fff' }: { className?: string; color?: string }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke={color} className={className}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
        </svg>
    );
}

export function ChevronRight({ className = 'h-4 w-4', color = '#fff' }: { className?: string; color?: string }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke={color} className={className}>
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
        </svg>
    );
}

export function SolidRatingStar() {
    return (
        <svg viewBox='0 0 9.5 8' className='h-4 w-4'>
            <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                    <stop offset={0} stopColor='#ffca11' />
                    <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                    id='ratingStar'
                    points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
            </defs>
            <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                    <g transform='translate(155 992)'>
                        <g transform='translate(600 29)'>
                            <g transform='translate(10 239)'>
                                <g transform='translate(101 10)'>
                                    <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export function OutlineRatingStar() {
    return (
        <svg viewBox='0 0 30 30' className='h-4 w-4'>
            <defs>
                <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                    <stop offset='0%' stopColor='#FFD211' />
                    <stop offset='100%' stopColor='#FFAD27' />
                </linearGradient>
            </defs>
            <path
                fill='none'
                fillRule='evenodd'
                stroke='url(#star__hollow)'
                strokeWidth={2}
                d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
            />
        </svg>
    );
}

export function TruckShipping() {
    return (
        <svg width={16} height={10} fill='none' viewBox='0 0 16 10'>
            <path
                d='M6.03523 9.22335C6.52887 8.79438 6.66113 8.14243 6.33064 7.76716C6.00015 7.3919 5.33205 7.43544 4.8384 7.8644C4.34476 8.29337 4.2125 8.94532 4.54299 9.32059C4.87349 9.69585 5.54158 9.65232 6.03523 9.22335Z'
                fill='#26AA99'
            />
            <path
                d='M12.0577 9.22286C12.5513 8.79389 12.6836 8.14194 12.3531 7.76668C12.0226 7.39141 11.3545 7.43495 10.8609 7.86391C10.3672 8.29288 10.235 8.94484 10.5655 9.3201C10.8959 9.69536 11.564 9.65183 12.0577 9.22286Z'
                fill='#26AA99'
            />
            <path
                d='M12.0379 0.56362L10.5835 5.88835H3.00415L3.18532 5.24068H5.13243C5.31609 5.24036 5.49603 5.18922 5.65206 5.093C5.8081 4.99678 5.93406 4.85927 6.01583 4.69592C6.09759 4.53256 6.13192 4.34981 6.11496 4.16815C6.09801 3.9865 6.03044 3.81313 5.91984 3.66749C5.82815 3.54625 5.70921 3.44797 5.5725 3.3805C5.43578 3.31303 5.28509 3.27823 5.13243 3.27889H3.7159L3.8921 2.63319H7.84803C8.06282 2.632 8.27146 2.56183 8.4428 2.43316C8.61414 2.30449 8.73898 2.12422 8.79869 1.91928C8.83951 1.77361 8.84587 1.62054 8.81729 1.47203C8.7887 1.32352 8.72593 1.18358 8.63389 1.06315C8.54185 0.942722 8.42303 0.845056 8.28671 0.777785C8.15039 0.710514 8.00025 0.675458 7.84803 0.675356H4.42765L4.45851 0.56362C4.49837 0.413049 4.58379 0.278259 4.70325 0.177463C4.8227 0.0766669 4.97043 0.0147227 5.12646 0L11.6726 0C11.9672 0.0148321 12.1295 0.265989 12.0379 0.56362Z'
                fill='#26AA99'
            />
            <path
                d='M15.2303 4.81544L14.1084 2.75872C14.0599 2.67496 13.9891 2.60611 13.9037 2.55971C13.8184 2.51332 13.7218 2.49117 13.6246 2.4957H12.1444L11.0494 6.54387H1.69212C1.64048 6.54704 1.5911 6.56605 1.5508 6.59829C1.51051 6.63053 1.48128 6.67439 1.46715 6.72384L1.28498 7.39623C1.27621 7.4161 1.27257 7.43783 1.27438 7.45946C1.27619 7.48108 1.2834 7.50192 1.29536 7.52008C1.30732 7.53824 1.32364 7.55315 1.34286 7.56346C1.36208 7.57378 1.38359 7.57917 1.40543 7.57916H2.59998L2.48152 8.00929C2.4663 8.05012 2.46153 8.09406 2.46762 8.13718C2.47372 8.18029 2.4905 8.22123 2.51645 8.25632C2.5424 8.29141 2.57671 8.31955 2.61631 8.33822C2.65591 8.35688 2.69955 8.3655 2.74332 8.36328H3.87117C4.20764 7.47929 5.18119 6.84052 6.04624 6.93742C6.7789 7.02048 7.2159 7.61376 7.09645 8.36724H9.89368C10.2301 7.48324 11.2037 6.84447 12.0677 6.94137C12.8014 7.02048 13.2394 7.61376 13.118 8.36724H14.0358C14.1394 8.36192 14.2388 8.32456 14.32 8.26038C14.4012 8.1962 14.4602 8.10841 14.4887 8.00929L15.2612 5.14669C15.2936 5.03638 15.2825 4.91797 15.2303 4.81544Z'
                fill='#26AA99'
            />
            <path
                d='M8.17512 1.74806C8.15496 1.81893 8.11207 1.88132 8.05296 1.92575C7.99385 1.97019 7.92175 1.99425 7.84762 1.99428H2.56573C2.53957 1.99432 2.51377 1.98827 2.49039 1.97661C2.46701 1.96495 2.44671 1.94801 2.43112 1.92714C2.41553 1.90627 2.40509 1.88206 2.40064 1.85645C2.39618 1.83085 2.39783 1.80456 2.40546 1.77971L2.50501 1.43461C2.51461 1.39969 2.5355 1.36888 2.56446 1.3469C2.59341 1.32492 2.62884 1.31301 2.66528 1.31299H7.84762C7.90071 1.31299 7.95307 1.32529 8.00054 1.3489C8.04801 1.37252 8.08928 1.40681 8.12107 1.44905C8.15286 1.49128 8.1743 1.5403 8.18368 1.59221C8.19307 1.64411 8.19014 1.69748 8.17512 1.74806Z'
                fill='#26AA99'
            />
            <path
                d='M0.00643111 4.39151L0.105977 4.04642C0.115567 4.01176 0.136344 3.98119 0.165116 3.9594C0.193889 3.9376 0.229067 3.92579 0.265249 3.92578H5.13302C5.22332 3.92578 5.30991 3.96141 5.37375 4.02483C5.4376 4.08825 5.47347 4.17426 5.47347 4.26395C5.47347 4.35364 5.4376 4.43966 5.37375 4.50308C5.30991 4.5665 5.22332 4.60213 5.13302 4.60213H0.166699C0.140919 4.6022 0.115476 4.59631 0.0923796 4.58493C0.0692836 4.57355 0.049168 4.557 0.0336227 4.53657C0.0180774 4.51614 0.00752824 4.4924 0.00280903 4.46722C-0.00191019 4.44205 -0.00067016 4.41613 0.00643111 4.39151Z'
                fill='#26AA99'
            />
        </svg>
    );
}
