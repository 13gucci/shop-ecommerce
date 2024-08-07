import { Link } from 'react-router-dom';
import { OutlineRatingStar, SolidRatingStar } from 'src/common/Icon/HeaderIcon';
import CustomButton from 'src/components/CustomButton';
import CustomInput from 'src/components/CustomInput';
import { BrandingFilter, CategoryFilter, LocationFilter } from 'src/constants/findFilter';
import FindFilter from 'src/pages/ProductListPage/components/FindFilter';

export default function AsideFilter() {
    return (
        <div className='mt-2'>
            <Link to={'/all_categories'} className='flex items-center space-x-2 text-[15px] font-bold capitalize'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-4 w-4'
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
                        <span className='font-bold'>Thời trang nam</span>
                    </Link>
                </li>
                <li className='ml-2 py-2 pl-2'>
                    <Link to={'/'} className='relative'>
                        <span>Điện thoại</span>
                    </Link>
                </li>
                <li className='ml-2 py-2 pl-2'>
                    <Link to={'/'} className='relative'>
                        <span>Điện thoại</span>
                    </Link>
                </li>
                <li className='ml-2 py-2 pl-2'>
                    <Link to={'/'} className='relative'>
                        <span>Điện thoại</span>
                    </Link>
                </li>
            </ul>

            <div className='mt-4 flex items-center space-x-2 text-[15px] font-bold uppercase'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-4 w-4'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
                    />
                </svg>

                <span>Bộ lọc tìm kiếm</span>
            </div>

            <div className='mt-4'>
                <div className='text-sm font-semibold capitalize text-gray-800'>khoảng giá</div>
                <form className='mt-2'>
                    <div className='flex items-start'>
                        <CustomInput
                            type='text'
                            className='block'
                            placeholder='TỪ'
                            classNameInput='px-1 py-1 text-sm w-full outline-none border border-gray-300'
                            name='from'
                        />
                        <div className='mx-2 mt-2 shrink-0'>-</div>
                        <CustomInput
                            type='text'
                            className=''
                            placeholder='ĐẾN'
                            classNameInput='px-1 py-1 text-sm w-full outline-none border border-gray-300'
                            name='to'
                        />
                    </div>
                    <CustomButton className='w-full bg-[#d0011b] py-2 text-sm uppercase text-white hover:opacity-80'>Áp dụng</CustomButton>
                </form>
            </div>
            <div className='my-3 h-[1px] w-full bg-gray-300'></div>

            <div className='mt-4'>
                <div className='text-sm font-semibold capitalize text-gray-800'>Đánh giá</div>

                <ul>
                    {Array(5)
                        .fill(0)
                        .map((_, index) => {
                            const countStar = 5 - index;
                            return (
                                <li key={index}>
                                    <Link to={'/'} className='my-3 flex items-center space-x-1'>
                                        {Array(countStar)
                                            .fill(0)
                                            .map((_, index) => (
                                                <SolidRatingStar key={index} />
                                            ))}
                                        {Array(5 - countStar)
                                            .fill(0)
                                            .map((_, index) => (
                                                <OutlineRatingStar key={index} />
                                            ))}
                                        {index !== 0 && <span className='text-base'>trở lên</span>}
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className='my-3 h-[1px] w-full bg-gray-300'></div>
            <FindFilter className='mt-7' listFilter={CategoryFilter} title='theo danh mục' />
            <div className='my-3 h-[1px] w-full bg-gray-300'></div>
            <FindFilter className='mt-5' listFilter={LocationFilter} title='nơi bán' />
            <div className='my-3 h-[1px] w-full bg-gray-300'></div>
            <FindFilter className='mt-5' listFilter={BrandingFilter} title='thương hiệu' />
            <div className='my-3 h-[1px] w-full bg-gray-300'></div>

            <CustomButton className='w-full bg-[#d0011b] py-2 text-sm uppercase text-white hover:opacity-80'>Xoá tất cả</CustomButton>
        </div>
    );
}
