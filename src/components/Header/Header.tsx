import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, CartIcon, ChevronIcon, GlobalIcon, QuestionMarkIcon, SearchIcon } from 'src/common/Icon/HeaderIcon';
import MainLogo from 'src/common/MainLogo';
import { headerContacts } from 'src/constants/headerUrl';
import { PATHS } from 'src/constants/navPaths';

export default function Header() {
    const [isAuthen] = useState(false);
    const [isShowSuggestResult] = useState<boolean>(false);

    return (
        <header className='bg-gradient-to-b from-[#f53d2d] to-[#f63] pb-5 pt-1'>
            <div className='container'>
                {/* First Row */}
                <nav className='flex justify-between'>
                    <ul className='flex items-center'>
                        {headerContacts.map((menu, index) => (
                            <div className='flex items-center' key={index}>
                                <li>
                                    <Link className='text-[13px] font-light capitalize text-white' target='_blank' to={menu.url}>
                                        {menu.title}
                                    </Link>
                                </li>
                                {index !== headerContacts.length - 1 && (
                                    <div className='mx-1 h-[10px] border-r-[1.5px] border-orange-500'></div>
                                )}
                            </div>
                        ))}
                    </ul>

                    <ul className='flex items-center gap-4 text-[13px] font-light text-white'>
                        <li className='flex cursor-pointer items-center capitalize hover:text-gray-300'>
                            <BellIcon />
                            Thông báo
                        </li>
                        <li className='flex cursor-pointer items-center capitalize hover:text-gray-300'>
                            <QuestionMarkIcon />
                            Hỗ trợ
                        </li>
                        <li className='flex cursor-pointer items-center capitalize hover:text-gray-300'>
                            <GlobalIcon />
                            Tiếng Việt
                            <ChevronIcon />
                        </li>
                        {/* Unauthenticated */}
                        {isAuthen ? (
                            <>
                                <li className='flex cursor-pointer items-center font-medium hover:text-gray-300'>
                                    <Link to={PATHS.AUTH_PAGES.REGISTER}>Đăng ký</Link>
                                </li>
                                <div className='h-3 border-r-[1px] border-orange-500'></div>
                                <li className='flex cursor-pointer items-center font-medium hover:text-gray-300'>
                                    <Link to={PATHS.AUTH_PAGES.LOGIN}>Đăng nhập</Link>
                                </li>
                            </>
                        ) : (
                            <li className='flex cursor-pointer items-center text-sm font-normal hover:text-gray-300'>
                                <div className='mr-2 h-6 w-6 flex-shrink-0'>
                                    <img
                                        className='h-full w-full rounded-full bg-white object-cover'
                                        src='https://down-vn.img.susercontent.com/file/vn-11134226-7r98o-ly3hoa0zu0lseb_tn'
                                        alt=''
                                    />
                                </div>
                                <div>minhtrnquang996</div>
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Second Row */}
                <nav className='mt-4 grid grid-cols-12 items-center gap-4'>
                    <Link to={PATHS.AUTH_PAGES.HOME} className='col-span-2'>
                        <MainLogo className='h-14 fill-white' />
                    </Link>
                    <div className='col-span-9 col-start-3'>
                        <form className='relative flex h-10 w-full items-center gap-3 rounded-sm bg-white p-1 shadow-sm'>
                            <input
                                type='search'
                                placeholder='FREE SHIP TỪ ĐƠN 0Đ'
                                className='ml-2 w-[92%] -translate-x-1 placeholder:font-normal focus:outline focus:outline-[1.5px] focus:outline-offset-[13px] focus:outline-black'
                            />
                            <button type='submit' className='h-[34px] w-[8%] rounded-sm bg-shopeeOrange px-4 hover:bg-opacity-95'>
                                <SearchIcon className='mx-auto h-4 w-4 font-bold text-white' />
                            </button>
                            {isShowSuggestResult && (
                                <div className='absolute bottom-0 right-0 top-full mt-2 h-[70px] w-full bg-blue-200'></div>
                            )}
                        </form>
                    </div>
                    <Link to='/' className='col-span-1 flex items-center justify-center'>
                        <CartIcon className='h-7 w-7 text-white' />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
