import { useState } from 'react';
import ButtonCarouselMemoized from 'src/components/ButtonCarousel/ButtonCarousel';

const carouselLinks = [
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lykt0gko8ko15f',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lyk8esgulyrx06',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lybr037hj5u56c',
    'https://cf.shopee.vn/file/vn-50009109-727a24a85a60935da5ccb9008298f681',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lyd5c98zk3f17f',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lyd5exd8wf9p06'
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [handleMouseOnCarousel, setHandleMouseOnCarousel] = useState<boolean>(false);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselLinks.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselLinks.length) % carouselLinks.length);
    };

    const handleMouseEnter = () => {
        setHandleMouseOnCarousel(true);
    };

    const handleMouseLeave = () => {
        setHandleMouseOnCarousel(false);
    };

    return (
        <div className='relative overflow-hidden' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
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
                        className={`h-3 w-3 rounded-full border border-gray-700/30 ${currentIndex === index ? 'bg-[#d0011b]' : 'bg-gray-200/50'}`}
                    ></div>
                ))}
            </div>

            {!!handleMouseOnCarousel && (
                <>
                    <ButtonCarouselMemoized direction='left' onClick={handlePrev} />
                    <ButtonCarouselMemoized direction='right' onClick={handleNext} />
                </>
            )}
        </div>
    );
}
