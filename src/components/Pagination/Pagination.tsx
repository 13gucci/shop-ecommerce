import clsx from 'clsx';
import { createSearchParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'src/common/Icon/HeaderIcon';
import { TQueryString } from 'src/pages/ProductListPage/ProductListPage';
import { renderArrayPaginate } from 'src/utils/utils';

type Props = {
    queryParams: TQueryString;
    page_size: number;
    range: number;
};

export default function Pagination({ page_size, queryParams, range }: Props) {
    const current_page = Number(queryParams.page);
    return (
        <div className='flex items-center'>
            {current_page === 1 ? (
                <span className='cursor-not-allowed'>
                    <ChevronLeft className='h-5 w-5' color='#78716c' />
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
                >
                    <ChevronLeft className='h-5 w-5' color='#78716c' />
                </Link>
            )}

            <ul className='mx-10 flex items-end space-x-3 text-lg text-[#78716c]'>
                {renderArrayPaginate({ page: current_page, page_size: page_size, range: range }).map((pg, index) => {
                    if (pg === 0) {
                        return <li key={index}>...</li>;
                    } else {
                        return (
                            <li key={index}>
                                <Link
                                    to={{
                                        pathname: '/',
                                        search: createSearchParams({
                                            ...queryParams,
                                            page: pg.toString()
                                        }).toString()
                                    }}
                                    className={clsx('rounded-sm px-5 py-1.5 hover:text-shopeeRed', {
                                        'bg-shopeeRed text-white hover:text-white': pg === current_page
                                    })}
                                >
                                    {pg}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
            {current_page === page_size ? (
                <span className='cursor-not-allowed'>
                    <ChevronRight className='h-5 w-5' color='#78716c' />
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
                >
                    <ChevronRight className='h-5 w-5' color='#78716c' />
                </Link>
            )}
        </div>
    );
}
