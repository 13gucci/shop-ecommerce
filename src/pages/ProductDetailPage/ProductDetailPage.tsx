import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { createSearchParams, Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'src/common/Icon/HeaderIcon';
import CustomInputNumber from 'src/components/CustomInputNumber';
import RatingStar from 'src/components/RatingStar';
import { AuthContext } from 'src/contexts/auth.context';
import ProductDetailHeaderSkeleton from 'src/pages/ProductDetailPage/components/ProductDetailHeaderSkeleton';
import productServices from 'src/services/product.services';
import { calculateDiscountPercentageVND, formatPrice, formatSoldProduct, generateNameId, getIdFromNameId } from 'src/utils/utils';

export default function ProductDetailPage() {
    const { auth } = useContext(AuthContext);
    const imageRef = useRef<HTMLImageElement>(null);
    const { product_id } = useParams();

    const id = getIdFromNameId(product_id as string);

    const { data: productDetailData } = useQuery({
        queryKey: ['product', product_id],
        queryFn: () => productServices.readProductDetail({ productId: id }),
        enabled: id !== undefined,
        staleTime: 2 * 60 * 1000
    });
    const queryParamFiltered = {
        limit: '5',
        page: '1',
        category: productDetailData?.data.data?.category._id
    };

    const [currentIndexImages, setCurrentIndexImages] = useState<number[]>([0, 5]);
    const [activeImage, setActiveImage] = useState<string>('');
    const product = productDetailData?.data.data;

    const currentImages = useMemo(() => {
        return product ? product.images.slice(...currentIndexImages) : [];
    }, [product, currentIndexImages]);

    const { data: categoryRelatedData } = useQuery({
        queryKey: ['product', queryParamFiltered],
        queryFn: () => productServices.readProducts({ queryParams: queryParamFiltered }),
        staleTime: 2 * 60 * 1000,
        enabled: Boolean(product)
    });

    useEffect(() => {
        if (product && product.images.length > 0) {
            document.title = product.name;
            setActiveImage(product.images[0]);
        }
    }, [product]);

    const hoverActiveImage = (image_url: string) => {
        setActiveImage(image_url);
    };

    const handleClickNext = () => {
        if (product) {
            if (currentIndexImages[1] < product?.images.length) {
                setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1]);
            }
        }
    };
    const handleClickPrev = () => {
        if (currentIndexImages[0] > 0) {
            setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1]);
        }
    };
    const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const image = imageRef.current;
        const { offsetX, offsetY } = event.nativeEvent;
        if (image) {
            const { naturalHeight, naturalWidth } = image;
            const top = offsetY * (1 - naturalHeight / rect.height);
            const left = offsetX * (1 - naturalWidth / rect.width);

            image.style.width = `${naturalWidth}px`;
            image.style.height = `${naturalHeight}px`;
            image.style.maxWidth = 'unset';
            image.style.top = `${top}px`;
            image.style.left = `${left}px`;
        }
    };

    const handleRemoveZoom = () => {
        imageRef.current?.removeAttribute('style');
    };

    if (!product) return <ProductDetailHeaderSkeleton />;

    return (
        <div className='bg-[#f5f5f5]'>
            {productDetailData && (
                <div className='container'>
                    {/* Breadcrumbs */}
                    <div className='flex items-center space-x-3 py-3 text-sm'>
                        <Link to='/' className='text-blue-900'>
                            Shopee
                        </Link>
                        <ChevronRight className='h-4 w-4' color='#000' />
                        <Link
                            to={{
                                pathname: '/',
                                search: createSearchParams({
                                    category: product.category._id || ''
                                }).toString()
                            }}
                            className='text-blue-900'
                        >
                            {product.category?.name || 'Category'}
                        </Link>
                        <ChevronRight className='h-4 w-4' color='#000' />
                        <span className='font-medium text-gray-900'>{product.name || 'Product Name'}</span>
                    </div>
                    <div className='bg-white pb-4 pl-4 pr-10 pt-4'>
                        <div className='grid grid-cols-12 gap-10'>
                            <div className='col-span-5'>
                                <div
                                    className='relative w-full cursor-zoom-in overflow-hidden pt-[100%]'
                                    onMouseLeave={handleRemoveZoom}
                                    onMouseMove={handleZoom}
                                >
                                    <img
                                        ref={imageRef}
                                        src={activeImage}
                                        className='pointer-events-none absolute left-0 top-0 z-10 h-full w-full object-cover'
                                        alt=''
                                    />
                                </div>
                                <div className='relative mt-2 grid grid-cols-5 gap-1'>
                                    {currentImages.map((img, index) => {
                                        const isActive = img === activeImage;
                                        return (
                                            <div
                                                key={index}
                                                className='relative w-full pt-[100%]'
                                                onMouseEnter={() => hoverActiveImage(img)}
                                            >
                                                <img
                                                    src={img}
                                                    className='absolute left-0 top-0 h-full w-full cursor-pointer bg-white object-cover'
                                                    alt={product.name}
                                                />
                                                {isActive && (
                                                    <div className='absolute left-0 top-0 h-full w-full border-2 border-shopeeRed'></div>
                                                )}
                                            </div>
                                        );
                                    })}
                                    <button
                                        onClick={handleClickPrev}
                                        className='absolute left-0 top-1/2 h-10 w-6 -translate-y-1/2 bg-black/20'
                                    >
                                        <ChevronLeft className='mx-auto h-5 w-5' color='#fff' />
                                    </button>
                                    <button
                                        onClick={handleClickNext}
                                        className='absolute right-0 top-1/2 h-10 w-6 -translate-y-1/2 bg-black/20'
                                    >
                                        <ChevronRight className='mx-auto h-5 w-5' color='#fff' />
                                    </button>
                                </div>
                            </div>
                            <div className='col-span-7'>
                                <div className='' style={{ fontWeight: 400 }}>
                                    <img
                                        className='float-left mr-2 mt-1 h-[18px]'
                                        src='https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.0.0-mr-20240805121008/pc/a0842aa9294375794fd2.png'
                                        alt=''
                                    />
                                    <h1 className='text-[22px]'> {product.name}</h1>
                                </div>
                                <div className='mt-3'>
                                    <div className='flex items-center justify-start space-x-5'>
                                        {/* Rating Star */}
                                        <div className='flex items-center space-x-2'>
                                            <span className='text-sm underline'>{product.rating}</span>
                                            <RatingStar ratingScore={product.rating} size='5' lightColor='#d0011b' />
                                            <span className='text-sm text-gray-500'>Đánh giá</span>
                                        </div>
                                        <div className='h-5 w-[0.5px] bg-black'></div>
                                        <div className='flex items-center space-x-2'>
                                            <span className='text-base'>{formatSoldProduct(product.sold)} </span>
                                            <span className='text-sm text-gray-500' style={{ fontWeight: 400 }}>
                                                Đã Bán
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div className='flex items-center bg-[#f5f5f5] px-5 py-7'>
                                        <span className='text-base text-gray-500 line-through'>
                                            ₫ {formatPrice(product.price_before_discount)}
                                        </span>
                                        <span className='ml-5 text-3xl text-shopeeRed'>₫ {formatPrice(product.price)}</span>
                                        <span
                                            className='ml-5 rounded-sm bg-shopeeRed px-1 py-[0.5px] text-xs text-white'
                                            style={{ fontWeight: 500 }}
                                        >
                                            {calculateDiscountPercentageVND(product.price, product.price_before_discount)}% GIẢM
                                        </span>
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <div className='flex items-start'>
                                        <div className='min-w-[150px] text-sm text-gray-500'>Vận Chuyển</div>
                                        <div className='flex flex-col space-y-1'>
                                            <div className='flex items-center space-x-2'>
                                                <img
                                                    className='h-6'
                                                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png'
                                                    alt=''
                                                />
                                                <p>Miễn phí vận chuyển</p>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <img
                                                    className='h-6'
                                                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/7b101a24cfe44d8eb45f.svg'
                                                    alt=''
                                                />
                                                <p className='text-gray-500'>Vận chuyển tới {auth.userProfile?.address}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-3 flex items-center'>
                                        <div className='min-w-[150px] text-sm text-gray-500'>Số lượng</div>
                                        <div className='flex items-center'>
                                            <button className='flex h-8 w-8 items-center justify-center rounded-bl rounded-tl border'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth={1.5}
                                                    stroke='currentColor'
                                                    className='h-3 w-3'
                                                >
                                                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
                                                </svg>
                                            </button>
                                            <CustomInputNumber
                                                value={1}
                                                className=''
                                                classNameError='hidden'
                                                classNameInput='h-8 border-t border-b w-12 p-1 text-center'
                                            />
                                            <button className='flex h-8 w-8 items-center justify-center rounded-br rounded-tr border'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth={1.5}
                                                    stroke='currentColor'
                                                    className='h-3 w-3'
                                                >
                                                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                                                </svg>
                                            </button>

                                            <span className='ml-5 text-sm text-gray-500'>{product.quantity} sản phẩm có sẵn</span>
                                        </div>
                                    </div>

                                    <div className='mt-10 flex items-center space-x-2'>
                                        <button className='flex items-center space-x-2 rounded-sm border-[1.5px] border-shopeeRed bg-red-50 px-4 py-3 text-sm capitalize text-shopeeRed'>
                                            <img
                                                className='h-5 w-5'
                                                src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b96050554b3be4feea08.svg'
                                                alt=''
                                            />
                                            <span>Thêm vào giỏ hàng</span>
                                        </button>
                                        <button className='flex items-center space-x-2 rounded-sm border-[1.5px] border-shopeeRed bg-shopeeRed px-10 py-3 text-sm capitalize text-white'>
                                            <span>Mua ngay</span>
                                        </button>
                                    </div>

                                    <div className='my-8 h-[0.5px] w-full bg-gray-300'></div>
                                    <div className='flex justify-between'>
                                        <div className='flex space-x-2'>
                                            <img
                                                className='h-5 w-5'
                                                src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/2bcf834c40468ebcb90b.svg'
                                                alt=''
                                            />
                                            <span className='text-sm text-gray-900'>Đổi ý miễn phí 15 ngày</span>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <img
                                                className='h-5 w-5'
                                                src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/2bcf834c40468ebcb90b.svg'
                                                alt=''
                                            />
                                            <span className='text-sm text-gray-900'>Đổi ý miễn phí 15 ngày</span>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <img
                                                className='h-5 w-5'
                                                src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/2bcf834c40468ebcb90b.svg'
                                                alt=''
                                            />
                                            <span className='text-sm text-gray-900'>Đổi ý miễn phí 15 ngày</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 grid grid-cols-12 gap-3'>
                        <div className='col-span-9'>
                            <div className='bg-white p-5'>
                                <div className='bg-[#f5f5f5] p-3 uppercase'>chi tiết sản phẩm</div>
                                <div className='m-4 text-sm leading-loose'>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(product.description)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='bg-white'>
                                <div className='p-5 text-base text-gray-600'>Top sản phẩm nổi bật</div>
                                {categoryRelatedData?.data.data?.products.map((product) => (
                                    <Link
                                        to={`/${generateNameId({ name: product.name, id: product._id })}`}
                                        className='block border-b p-6'
                                        key={product._id}
                                    >
                                        <div className='relative w-full pt-[100%]'>
                                            <img className='absolute left-0 top-0 h-full w-full' src={product.image} alt={product.name} />
                                        </div>
                                        <div className='p-3'>
                                            <div className='line-clamp-2 text-sm text-gray-600'>{product.name}</div>
                                            <div className='mt-2 text-shopeeRed'>đ {formatPrice(product.price)}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
