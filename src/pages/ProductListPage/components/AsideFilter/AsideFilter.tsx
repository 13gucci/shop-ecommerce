import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { omit } from 'lodash';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { OutlineRatingStar, SolidRatingStar } from 'src/common/Icon/HeaderIcon';
import CustomButton from 'src/components/CustomButton';
import CustomInputNumber from 'src/components/CustomInputNumber';
import { BrandingFilter, CategoryFilter, LocationFilter } from 'src/constants/findFilter';
import FindFilter from 'src/pages/ProductListPage/components/FindFilter';
import { TQueryString } from 'src/pages/ProductListPage/ProductListPage';
import { filterRangePriceSchema, TFilterRangePrice } from 'src/schema/RangePriceFilterSchema';
import { TCategory } from 'src/types/category.type';
import { ObjectSchema } from 'yup';

type Props = {
    queryParams: TQueryString;
    categories_data: TCategory[];
};

export default function AsideFilter({ queryParams, categories_data }: Props) {
    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm<TFilterRangePrice>({
        defaultValues: {
            price_max: '',
            price_min: ''
        },
        resolver: yupResolver<TFilterRangePrice>(filterRangePriceSchema as ObjectSchema<TFilterRangePrice>)
    });

    const { category: current_category } = queryParams;

    const onSubmit: SubmitHandler<TFilterRangePrice> = (data) => {
        navigate({
            pathname: '/',
            search: createSearchParams({
                ...queryParams,
                price_max: data.price_max,
                price_min: data.price_min
            }).toString()
        });
    };

    const handleRemoveAll = () => {
        reset();
        navigate({
            pathname: '/',
            search: createSearchParams(omit(queryParams, ['price_min', 'price_max', 'rating_filter', 'category'])).toString()
        });
    };

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
                {categories_data.map((category) => (
                    <li className='ml-2 py-2 pl-2' key={category._id}>
                        <Link
                            to={{
                                hash: '/',
                                search: createSearchParams({
                                    ...queryParams,
                                    category: category._id
                                }).toString()
                            }}
                            className='relative'
                        >
                            {current_category === category._id && (
                                <svg viewBox='0 0 4 7' className='absolute left-[-15px] top-1/2 h-2.5 w-2.5 -translate-y-[50%]' fill='red'>
                                    <polygon points='4 3.5 0 0 0 7' />
                                </svg>
                            )}
                            <span
                                className={clsx('font-bold', {
                                    'text-shopeeRed': current_category === category._id
                                })}
                            >
                                {category.name}
                            </span>
                        </Link>
                    </li>
                ))}
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
                <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex items-start'>
                        <Controller
                            control={control}
                            name='price_min'
                            render={({ field }) => (
                                <CustomInputNumber
                                    placeholder='TỪ'
                                    {...field}
                                    classNameInput='px-1 py-1 text-sm w-full outline-none border border-gray-300'
                                />
                            )}
                        />

                        <div className='mx-2 mt-2 shrink-0'>-</div>

                        <Controller
                            control={control}
                            name='price_max'
                            render={({ field }) => (
                                <CustomInputNumber
                                    {...field}
                                    placeholder='ĐẾN'
                                    classNameInput='px-1 py-1 text-sm w-full outline-none border border-gray-300'
                                />
                            )}
                        />
                    </div>
                    <div className='min-h-[1.25rem] text-center text-sm text-red-600'>{errors.price_min?.message}</div>
                    <CustomButton type='submit' className='w-full bg-[#d0011b] py-2 text-sm uppercase text-white hover:opacity-80'>
                        Áp dụng
                    </CustomButton>
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
                                    <Link
                                        to={{
                                            pathname: '/',
                                            search: createSearchParams({
                                                ...queryParams,
                                                rating_filter: String(countStar)
                                            }).toString()
                                        }}
                                        className='my-3 flex items-center space-x-1'
                                    >
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

            <CustomButton onClick={handleRemoveAll} className='w-full bg-[#d0011b] py-2 text-sm uppercase text-white hover:opacity-80'>
                Xoá tất cả
            </CustomButton>
        </div>
    );
}
