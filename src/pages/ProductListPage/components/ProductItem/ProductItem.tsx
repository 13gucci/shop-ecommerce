import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TruckShipping } from 'src/common/Icon/HeaderIcon';
import RatingStar from 'src/components/RatingStar';

function Tag({ title, color }: { title?: string; color?: string }) {
    const colors = useMemo(() => {
        switch (color) {
            case 'red':
                return { textColor: 'shopeeRed', backgroundColor: 'red-50' };
            case 'yellow':
                return { textColor: 'yellow-500', backgroundColor: 'yellow-50' };
            default:
                return {};
        }
    }, [color]);

    return (
        <div
            className={`text-${colors.textColor} rounded-[1px] border border-${colors.textColor} bg-${colors.backgroundColor} px-1 py-[1px] text-[10px]`}
        >
            {title}
        </div>
    );
}

export default function ProductItem() {
    return (
        <Link to='/'>
            <div className='hover:shadow-dm overflow-hidden rounded-sm bg-white shadow transition-transform hover:-translate-y-[3px]'>
                <div className='relative w-full pt-[100%]'>
                    <img
                        src='https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-luk3f0wjhzq6b1_tn'
                        className='absolute left-0 top-0 h-full w-full'
                        alt=''
                    />
                </div>
                <div className='overflow-hidden p-2'>
                    {/* Name */}
                    <div className='line-clamp-2 min-h-[2rem] text-xs'>
                        <img
                            className='float-left mr-[2px] mt-[2px] h-[12px]'
                            src='https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.0.0-mr-20240805121008/pc/a0842aa9294375794fd2.png'
                            alt=''
                        />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto totam libero tenetur cum maiores corporis, suscipit
                        voluptas similique iure nisi repellat nostrum error deleniti assumenda dolor beatae, a, delectus accusantium.
                    </div>
                    {/* Tag */}
                    <div className='mt-2 flex items-center justify-start gap-2'>
                        <Tag color='red' title='Mua để nhận quà' />
                        <Tag color='yellow' title='0% Trả góp' />
                    </div>
                    {/* Price */}
                    <div className='mt-2 flex items-center space-x-2'>
                        {/* Old Price */}
                        <div className='trun max-w-[50%] text-xs text-gray-500 line-through'>đ2.000</div>
                        {/* New price */}
                        <div className='trun text-shopeeRed max-w-[50%] text-base'>
                            <span>₫</span>
                            12.000
                        </div>
                    </div>
                    {/* Rating Star */}
                    <div className='mt-2 flex items-center justify-between'>
                        <RatingStar ratingScore={3.4} />
                        <span className='text-xs'>Đã bán 2,7k</span>
                    </div>

                    {/* Shipping */}
                    <div className='mt-2 flex items-center space-x-1'>
                        <TruckShipping />
                        <span className='text-xs text-[#26AA99]'>3 - 5 ngày</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
