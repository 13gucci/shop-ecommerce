import { ChevronLeft, ChevronRight } from 'src/common/Icon/HeaderIcon';
import CustomButton from 'src/components/CustomButton';

export default function SortProductList() {
    return (
        <div className='bg-[#edededb3] px-5 py-3'>
            <div className='flex flex-wrap items-center justify-between space-y-2'>
                {/* Filter */}
                <div className='flex flex-wrap items-center gap-3 text-sm capitalize'>
                    <div className='text-gray-700'>Sắp xếp theo</div>
                    <CustomButton className='bg-shopeeRed rounded-sm px-4 py-2 text-white shadow-sm hover:opacity-80'>
                        Phổ biến
                    </CustomButton>
                    <CustomButton className='rounded-sm bg-white px-4 py-2 shadow-sm hover:opacity-80'>Mới nhất</CustomButton>
                    <CustomButton className='rounded-sm bg-white px-4 py-2 shadow-sm hover:opacity-80'>Bán chạy</CustomButton>
                    <select className='rounded-sm bg-white px-4 py-2 shadow-sm outline-none hover:opacity-80'>
                        <option value='' disabled>
                            Giá
                        </option>
                        <option value='price:asc'>Giá: Thấp đến Cao</option>
                        <option value='price:desc'>Giá: Cao đến Thấp</option>
                    </select>
                </div>

                {/* Paginate */}
                <div className='flex flex-wrap items-center gap-3 text-sm capitalize'>
                    <div>
                        <span className='text-shopeeRed'>1</span>
                        <span>/9</span>
                    </div>
                    <div className='flex items-center'>
                        <button className='rounded-bl-sm rounded-tl-sm border bg-gray-50 p-2'>
                            <ChevronLeft color='#000' className='h-5 w-5' />
                        </button>
                        <button className='rounded-br-sm rounded-tr-sm border bg-gray-50 p-2'>
                            <ChevronRight color='#000' className='h-5 w-5' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
