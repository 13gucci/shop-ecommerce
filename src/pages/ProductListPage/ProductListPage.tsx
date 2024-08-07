import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Carousel from 'src/components/Carousel/Carousel';
import { TitlePages } from 'src/constants/titlePage';
import useQueryParams from 'src/hooks/useQueryParams';
import AsideFilter from 'src/pages/ProductListPage/components/AsideFilter';
import ProductItem from 'src/pages/ProductListPage/components/ProductItem';
import SortProductList from 'src/pages/ProductListPage/components/SortProductList';
import productServices from 'src/services/product.services';

const ONE_MINUTE = 1 * 60 * 1000;

export default function ProductListPage() {
    const queryParams = useQueryParams();

    useEffect(() => {
        document.title = TitlePages.HOME;
    }, []);

    const { data } = useQuery({
        queryKey: ['products', queryParams],
        queryFn: () => productServices.readProducts({ queryParams: queryParams }),
        staleTime: ONE_MINUTE
    });

    console.log(data);

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='container pt-5'>
                {/* Carousel */}
                <Carousel />
                {/* End Carousel */}

                <div className='mt-10 grid grid-cols-12 gap-5'>
                    <div className='col-span-2'>
                        <AsideFilter />
                    </div>
                    <div className='col-span-10 ml-2 flex flex-col'>
                        <SortProductList />
                        <div className='mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                            {data &&
                                data.data.data?.products.map((product, index) => (
                                    <div key={index} className='col-span-1 flex-shrink-0'>
                                        <ProductItem product={product} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
