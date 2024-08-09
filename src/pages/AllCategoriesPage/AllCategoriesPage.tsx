import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { createSearchParams, Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'src/common/Icon/HeaderIcon';
import categoryServices from 'src/services/category.services';
import { splitPath } from 'src/utils/utils';

const thumbs = [
    'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn',
    'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
];
const handlePathName = (name: string) => {
    switch (name) {
        case '/':
            return 'Dạo';
        case 'all_categories':
            return 'Tất cả Danh mục';
        default:
            return;
    }
};

export default function AllCategoriesPage() {
    const { pathname } = useLocation();
    const paths = splitPath(pathname);

    const { data: categoriesData } = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoryServices.readCategories(),
        staleTime: 1 * 60 * 1000
    });

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='container'>
                {/* Breadscrumb */}
                <div className='flex items-center justify-start space-x-5 py-10 text-sm'>
                    {paths.map((pth, index) => (
                        <React.Fragment key={index}>
                            {index === 0 ? <Link to={pth}>{handlePathName(pth)}</Link> : <span>{handlePathName(pth)}</span>}
                            {index < paths.length - 1 && <ChevronRight className='h-4 w-4' color='#000' />}
                        </React.Fragment>
                    ))}
                </div>

                <div className='flex flex-wrap'>
                    {categoriesData?.data.data?.map((category, index) => (
                        <Link
                            to={{
                                pathname: '/',
                                search: createSearchParams({
                                    category: category._id
                                }).toString()
                            }}
                            className='flex-col border-[0.8px] bg-white duration-300 hover:shadow-lg'
                            key={category._id}
                        >
                            <div className='relative w-[170px] pt-[100%]'>
                                <img src={thumbs[index]} alt='' className='absolute left-0 top-0 h-full w-full' />
                            </div>
                            <div className='py-2 text-center text-sm'>{category.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
