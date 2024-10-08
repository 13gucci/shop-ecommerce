import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Carousel from 'src/components/Carousel/Carousel';
import Pagination from 'src/components/Pagination';
import { TitlePages } from 'src/constants/titlePage';
import useQueryFiltered from 'src/hooks/useQueryFiltered';
import AsideFilter from 'src/pages/ProductListPage/components/AsideFilter';
import ProductItem from 'src/pages/ProductListPage/components/ProductItem';
import SortProductList from 'src/pages/ProductListPage/components/SortProductList';
import categoryServices from 'src/services/category.services';
import productServices from 'src/services/product.services';
import { TQueryParamProduct } from 'src/types/product.type';

const ONE_MINUTE = 1 * 60 * 1000;

export type TQueryString = {
    [key in keyof TQueryParamProduct]: string;
};

export default function ProductListPage() {
    const queryParamFiltered = useQueryFiltered();

    useEffect(() => {
        document.title = TitlePages.HOME;
    }, []);

    const { data: productsData } = useQuery({
        queryKey: ['products', queryParamFiltered],
        queryFn: () => productServices.readProducts({ queryParams: queryParamFiltered as TQueryParamProduct }),
        staleTime: ONE_MINUTE
    });

    const { data: categoriesData } = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoryServices.readCategories(),
        staleTime: ONE_MINUTE
    });

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='container pt-5'>
                {/* Carousel */}
                <Carousel />
                {/* End Carousel */}

                <div className='mt-10 grid grid-cols-12 gap-5'>
                    <div className='col-span-2'>
                        <AsideFilter categories_data={categoriesData?.data.data || []} queryParams={queryParamFiltered} />
                    </div>
                    {productsData && (
                        <div className='col-span-10 ml-2 flex flex-col'>
                            <SortProductList
                                page_size={productsData.data.data?.pagination.page_size as number}
                                queryParams={queryParamFiltered}
                            />
                            <div className='mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                                {productsData.data.data?.products.map((product, index) => (
                                    <div key={index} className='col-span-1 flex-shrink-0'>
                                        <ProductItem product={product} />
                                    </div>
                                ))}
                            </div>
                            <div className='mt-10 flex items-center justify-center'>
                                <Pagination
                                    range={2}
                                    page_size={productsData.data.data?.pagination.page_size as number}
                                    queryParams={queryParamFiltered}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
