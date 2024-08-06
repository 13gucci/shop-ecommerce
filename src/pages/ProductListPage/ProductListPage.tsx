import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'src/common/Icon/HeaderIcon';
import { TitlePages } from 'src/constants/titlePage';
import AsideFilter from 'src/pages/ProductListPage/components/AsideFilter';
import ProductItem from 'src/pages/ProductListPage/components/ProductItem';
import SortProductList from 'src/pages/ProductListPage/components/SortProductList';

const carouselLinks = [
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lybr037hj5u56c',
    'https://cf.shopee.vn/file/vn-50009109-727a24a85a60935da5ccb9008298f681',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lyd5c98zk3f17f',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lykt0gko8ko15f',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lyd5exd8wf9p06',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lyk8esgulyrx06'
];

export default function ProductListPage() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [handleMouseOnCarousel, setHandleMouseOnCarousel] = useState<boolean>(false);

    useEffect(() => {
        document.title = TitlePages.HOME;
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselLinks.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselLinks.length) % carouselLinks.length);
    };

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='container pt-5'>
                {/* Carousel */}
                <div
                    className='relative overflow-hidden'
                    onMouseLeave={() => setHandleMouseOnCarousel(false)}
                    onMouseEnter={() => setHandleMouseOnCarousel(true)}
                >
                    <ul className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {carouselLinks.map((item, index) => (
                            <li className='w-full flex-shrink-0' key={index}>
                                <img src={item} alt='' className='h-full w-full object-cover' />
                            </li>
                        ))}
                    </ul>
                    <div className='absolute bottom-5 left-1/2 flex -translate-x-[50%] items-center space-x-2'>
                        {carouselLinks.map((_, index) => (
                            <div
                                key={index}
                                className={`h-3 w-3 rounded-full border border-gray-400 ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-100/15'}`}
                            ></div>
                        ))}
                    </div>

                    {!!handleMouseOnCarousel && (
                        <>
                            <button onClick={handlePrev} className='absolute left-0 top-1/2 -translate-y-[50%] bg-black/40 px-1 py-3'>
                                <ChevronLeft className='h-8 w-8 text-white' />
                            </button>
                            <button onClick={handleNext} className='absolute right-0 top-1/2 -translate-y-[50%] bg-black/40 px-1 py-3'>
                                <ChevronRight className='h-8 w-8 text-white' />
                            </button>
                        </>
                    )}
                </div>
                {/* End Carousel */}

                <div className='mt-10 grid grid-cols-12 gap-4'>
                    <div className='col-span-2'>
                        <AsideFilter />
                    </div>
                    <div className='col-span-10 ml-2 flex flex-col'>
                        <SortProductList />
                        <div className='mt-1 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                            {Array(30)
                                .fill(0)
                                .map((_, index) => (
                                    <div key={index} className='col-span-1 flex-shrink-0'>
                                        <ProductItem />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
