import clsx from 'clsx';
import { omit } from 'lodash';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'src/common/Icon/HeaderIcon';
import CustomButton from 'src/components/CustomButton';
import { TQueryString } from 'src/pages/ProductListPage/ProductListPage';
import { EOrder, ESortBy } from 'src/types/product.type';

type Props = {
    queryParams: TQueryString;
    page_size: number;
};
export default function SortProductList({ page_size, queryParams }: Props) {
    const current_page = Number(queryParams.page);
    const navigate = useNavigate();
    const { sort_by = ESortBy.SOLD, order } = queryParams;

    const handleChangeFilterSortBy = (sort_by: ESortBy) => () => {
        navigate({
            pathname: '/',
            search: createSearchParams(
                omit(
                    {
                        ...queryParams,
                        sort_by: sort_by
                    },
                    ['order']
                )
            ).toString()
        });
    };

    const handleChangeFilterOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
        navigate({
            pathname: '/',
            search: createSearchParams({
                ...queryParams,
                sort_by: ESortBy.PRICE,
                order: event.target.value
            }).toString()
        });
    };

    return (
        <div className='bg-[#edededb3] px-5 py-3'>
            <div className='flex flex-wrap items-center justify-between space-y-2'>
                {/* Filter */}
                <div className='flex flex-wrap items-center gap-3 text-sm capitalize'>
                    <div className='text-gray-700'>Sắp xếp theo</div>
                    <CustomButton
                        onClick={handleChangeFilterSortBy(ESortBy.VIEW)}
                        className={clsx('rounded-sm px-4 py-2 shadow-sm hover:opacity-80', {
                            'bg-shopeeRed text-white': sort_by === ESortBy.VIEW,
                            'bg-white text-gray-800': sort_by !== ESortBy.VIEW
                        })}
                    >
                        Phổ biến
                    </CustomButton>
                    <CustomButton
                        onClick={handleChangeFilterSortBy(ESortBy.CREATED_AT)}
                        className={clsx('rounded-sm px-4 py-2 shadow-sm hover:opacity-80', {
                            'bg-shopeeRed text-white': sort_by === ESortBy.CREATED_AT,
                            'bg-white text-gray-800': sort_by !== ESortBy.CREATED_AT
                        })}
                    >
                        Mới nhất
                    </CustomButton>
                    <CustomButton
                        onClick={handleChangeFilterSortBy(ESortBy.SOLD)}
                        className={clsx('rounded-sm px-4 py-2 shadow-sm hover:opacity-80', {
                            'bg-shopeeRed text-white': sort_by === ESortBy.SOLD,
                            'bg-white text-gray-800': sort_by !== ESortBy.SOLD
                        })}
                    >
                        Bán chạy
                    </CustomButton>
                    <select
                        value={order || ''}
                        onChange={handleChangeFilterOrder}
                        className={clsx('rounded-sm px-4 py-2 shadow-sm outline-none hover:opacity-80', {
                            'bg-shopeeRed text-white': order !== undefined,
                            'bg-white text-gray-800': order === undefined
                        })}
                    >
                        <option className='bg-white text-gray-800' value='' disabled>
                            Giá
                        </option>
                        <option className='bg-white text-gray-800' value={EOrder.ASC}>
                            Giá: Thấp đến Cao
                        </option>
                        <option className='bg-white text-gray-800' value={EOrder.DESC}>
                            Giá: Cao đến Thấp
                        </option>
                    </select>
                </div>

                {/* Paginate */}
                <div className='flex flex-wrap items-center gap-3 text-sm capitalize'>
                    <div>
                        <span className='text-shopeeRed'>{current_page}</span>
                        <span>/{page_size}</span>
                    </div>
                    <div className='flex items-center'>
                        {current_page === 1 ? (
                            <span className='cursor-not-allowed rounded-br-sm rounded-tr-sm border bg-gray-100 p-2'>
                                <ChevronLeft color='#fff' className='h-5 w-5' />
                            </span>
                        ) : (
                            <Link
                                to={{
                                    pathname: '/',
                                    search: createSearchParams({
                                        ...queryParams,
                                        page: (current_page - 1).toString()
                                    }).toString()
                                }}
                                className='rounded-bl-sm rounded-tl-sm border bg-gray-50 p-2'
                            >
                                <ChevronLeft color='#000' className='h-5 w-5' />
                            </Link>
                        )}

                        {current_page === page_size ? (
                            <span className='cursor-not-allowed rounded-br-sm rounded-tr-sm border bg-gray-100 p-2'>
                                <ChevronRight color='#fff' className='h-5 w-5' />
                            </span>
                        ) : (
                            <Link
                                to={{
                                    pathname: '/',
                                    search: createSearchParams({
                                        ...queryParams,
                                        page: (current_page + 1).toString()
                                    }).toString()
                                }}
                                className='rounded-bl-sm rounded-tl-sm border bg-gray-50 p-2'
                            >
                                <ChevronRight color='#000' className='h-5 w-5' />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
