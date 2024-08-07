import React from 'react';
import { ChevronLeft, ChevronRight } from 'src/common/Icon/HeaderIcon';

type Props = {
    onClick: () => void;
    direction: string;
};

function ButtonCarousel({ onClick, direction }: Props) {
    return (
        <button onClick={onClick} className={`absolute ${direction}-0 top-1/2 -translate-y-[50%] bg-black/40 px-1 py-3`}>
            {direction === 'left' ? <ChevronLeft className='h-8 w-8 text-white' /> : <ChevronRight className='h-8 w-8 text-white' />}
        </button>
    );
}

const ButtonCarouselMemoized = React.memo(ButtonCarousel);

export default ButtonCarouselMemoized;
