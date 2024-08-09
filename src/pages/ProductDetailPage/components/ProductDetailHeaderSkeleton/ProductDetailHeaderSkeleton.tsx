import { ChevronRight } from 'src/common/Icon/HeaderIcon';

export default function ProductDetailHeaderSkeleton() {
    return (
        <div className='container'>
            {/* Breadcrumbs Skeleton */}
            <div className='flex items-center space-x-3 py-3 text-sm'>
                <div className='h-4 w-24 animate-pulse rounded bg-gray-300'></div>
                <ChevronRight className='h-4 w-4 text-gray-300' />
                <div className='h-4 w-24 animate-pulse rounded bg-gray-300'></div>
                <ChevronRight className='h-4 w-4 text-gray-300' />
                <div className='h-4 w-36 animate-pulse rounded bg-gray-300'></div>
            </div>

            <div className='bg-white pb-4 pl-4 pr-10 pt-4'>
                <div className='grid grid-cols-12 gap-10'>
                    {/* Image Skeleton */}
                    <div className='col-span-5'>
                        <div className='relative w-full animate-pulse rounded bg-gray-300 pt-[100%]'></div>
                        <div className='relative mt-2 grid grid-cols-5 gap-1'>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className='relative w-full animate-pulse rounded bg-gray-300 pt-[100%]'></div>
                            ))}
                            <button className='absolute left-0 top-1/2 h-10 w-6 -translate-y-1/2 animate-pulse rounded bg-gray-300'></button>
                            <button className='absolute right-0 top-1/2 h-10 w-6 -translate-y-1/2 animate-pulse rounded bg-gray-300'></button>
                        </div>
                    </div>

                    <div className='col-span-7'>
                        {/* Product Name Skeleton */}
                        <div className='flex items-center'>
                            <div className='h-6 w-36 animate-pulse rounded bg-gray-300'></div>
                        </div>

                        {/* Rating and Sold Skeleton */}
                        <div className='mt-3 flex items-center space-x-5'>
                            <div className='h-4 w-24 animate-pulse rounded bg-gray-300'></div>
                            <div className='h-5 w-[0.5px] bg-gray-300'></div>
                            <div className='h-4 w-24 animate-pulse rounded bg-gray-300'></div>
                        </div>

                        {/* Price Skeleton */}
                        <div className='mt-3 flex items-center bg-[#f5f5f5] px-5 py-7'>
                            <div className='h-4 w-24 animate-pulse rounded bg-gray-300'></div>
                            <div className='ml-4 h-6 w-32 animate-pulse rounded bg-gray-300'></div>
                            <div className='ml-4 h-4 w-16 animate-pulse rounded bg-gray-300'></div>
                        </div>

                        {/* Shipping Skeleton */}
                        <div className='mt-5 flex items-start'>
                            <div className='h-4 w-24 animate-pulse rounded bg-gray-300'></div>
                            <div className='ml-4 flex flex-col space-y-1'>
                                <div className='h-6 w-32 animate-pulse rounded bg-gray-300'></div>
                                <div className='h-4 w-36 animate-pulse rounded bg-gray-300'></div>
                            </div>
                        </div>

                        {/* Quantity Skeleton */}
                        <div className='mt-3 flex items-center'>
                            <div className='h-4 w-24 animate-pulse rounded bg-gray-300'></div>
                            <div className='ml-4 flex items-center space-x-3'>
                                <div className='h-8 w-8 animate-pulse rounded bg-gray-300'></div>
                                <div className='h-8 w-12 animate-pulse rounded bg-gray-300'></div>
                                <div className='h-8 w-8 animate-pulse rounded bg-gray-300'></div>
                                <div className='ml-5 h-4 w-24 animate-pulse rounded bg-gray-300'></div>
                            </div>
                        </div>

                        {/* Buttons Skeleton */}
                        <div className='mt-10 flex items-center space-x-2'>
                            <div className='h-12 w-40 animate-pulse rounded bg-gray-300'></div>
                            <div className='h-12 w-40 animate-pulse rounded bg-gray-300'></div>
                        </div>

                        {/* Additional Info Skeleton */}
                        <div className='my-8 h-[0.5px] w-full bg-gray-300'></div>
                        <div className='flex justify-between'>
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className='flex space-x-2'>
                                    <div className='h-5 w-5 animate-pulse rounded bg-gray-300'></div>
                                    <div className='h-4 w-36 animate-pulse rounded bg-gray-300'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
