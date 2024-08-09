import { Link } from 'react-router-dom';
import { TruckShipping } from 'src/common/Icon/HeaderIcon';
import RatingStar from 'src/components/RatingStar';
import Tag from 'src/pages/ProductListPage/components/Tag/Tag';
import { TProduct } from 'src/types/product.type';
import { formatPrice, formatSoldProduct, generateNameId, getRandomProvince } from 'src/utils/utils';

type Props = {
    product: TProduct;
};

export default function ProductItem({ product }: Props) {
    return (
        <Link to={`/${generateNameId({ name: product.name, id: product._id })}`}>
            <div className='hover:shadow-dm relative bg-white shadow transition-transform hover:-translate-y-[2px] hover:outline hover:outline-[1px] hover:outline-offset-[0.5px] hover:outline-shopeeRed'>
                <div className='relative w-full pt-[100%]'>
                    <img src={product.image} className='absolute left-0 top-0 h-full w-full' alt='' />
                </div>
                <div className='overflow-hidden p-2'>
                    {/* Name */}
                    <div className='line-clamp-2 min-h-[2rem] text-xs'>
                        <img
                            className='float-left mr-[2px] mt-[2px] h-[12px]'
                            src='https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.0.0-mr-20240805121008/pc/a0842aa9294375794fd2.png'
                            alt=''
                        />
                        {product.name}
                    </div>
                    {/* Tag */}
                    <div className='mt-2 flex items-center justify-start gap-2'>
                        <Tag color='red' title='Mua để nhận quà' />
                        <Tag color='yellow' title='0% Trả góp' />
                    </div>
                    {/* Price */}
                    <div className='mt-2 flex items-center space-x-2'>
                        {/* Old Price */}
                        <div className='trun max-w-[50%] text-xs text-gray-500 line-through'>{formatPrice(product.price)}</div>
                        {/* New price */}
                        <div className='trun max-w-[50%] text-base text-shopeeRed'>
                            <span>₫</span>
                            {formatPrice(product.price_before_discount)}
                        </div>
                    </div>
                    {/* Rating Star */}
                    <div className='mt-3 flex items-center justify-between'>
                        <RatingStar ratingScore={product.rating} />
                        <span className='text-xs'>Đã bán {formatSoldProduct(product.sold)}</span>
                    </div>

                    {/* Shipping */}
                    <div className='mt-4 flex items-center justify-between'>
                        <div className='flex items-center space-x-1'>
                            <TruckShipping />
                            <span className='text-xs text-[#26AA99]'>3 - 5 ngày</span>
                        </div>
                        <div className='text-xs text-gray-800'>{getRandomProvince()}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
