import { Link } from 'react-router-dom';

export default function AsideFilter() {
    return (
        <div className=''>
            <Link to={'/all_categories'} className='mt-2 flex items-center space-x-2 text-[15px] font-bold capitalize'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5' />
                </svg>
                <span>Tất cả danh mục</span>
            </Link>
            <div className='my-3 h-[1px] w-full bg-gray-300'></div>
            <ul className='text-sm font-normal'>
                <li className='ml-2 py-2 pl-2'>
                    <Link to={'/'} className='relative'>
                        <svg viewBox='0 0 4 7' className='absolute left-[-15px] top-1/2 h-2.5 w-2.5 -translate-y-[50%]' fill='red'>
                            <polygon points='4 3.5 0 0 0 7' />
                        </svg>
                        Thời trang nam
                    </Link>
                </li>
                <li className='ml-2 py-2 pl-2'>
                    <Link to={'/'} className='relative'>
                        Thời trang nam
                    </Link>
                </li>
            </ul>
        </div>
    );
}
