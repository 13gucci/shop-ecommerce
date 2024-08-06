import { useMutation } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, CartIcon, ChevronIcon, GlobalIcon, QuestionMarkIcon, SearchIcon } from 'src/common/Icon/HeaderIcon';
import MainLogo from 'src/common/MainLogo';
import Popover from 'src/components/Popover';
import { headerContacts } from 'src/constants/headerUrl';
import { PATHS } from 'src/constants/navPaths';
import { AuthContext } from 'src/contexts/auth.context';
import authenticateSerivce from 'src/services/auth.services';

const IS_LOGGED_IN = true;

export default function Header() {
    const { auth, dispatch } = useContext(AuthContext);
    const [onChangeForm, setOnChangeForm] = useState(false);

    const { mutate: logoutMutation } = useMutation({
        mutationFn: () => authenticateSerivce.logout(),
        onSuccess: () => {
            dispatch({ type: 'LOGOUT' });
        }
    });

    const handleOnChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== '') {
            setOnChangeForm(true);
        } else {
            setOnChangeForm(false);
        }
    };

    const handleLogout = () => {
        logoutMutation();
    };

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

                        <Popover
                            renderPopover={
                                <div className='flex flex-col rounded-sm border bg-white px-2 py-3'>
                                    <button className='px-3 py-2 hover:text-red-400'>Tiếng Việt</button>
                                    <button className='px-3 py-2 hover:text-red-400'>Tiếng Anh</button>
                                </div>
                            }
                            as='li'
                            className='flex cursor-pointer items-center capitalize hover:text-gray-300'
                        >
                            <GlobalIcon />
                            Tiếng Việt
                            <ChevronIcon />
                        </Popover>

                        {/* Unauthenticated */}
                        {auth.isAuthenticated !== IS_LOGGED_IN ? (
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
                            <Popover
                                renderPopover={
                                    <div className='flex flex-col bg-white'>
                                        <Link className='px-4 py-3 hover:bg-gray-50 hover:text-cyan-500' to={'/profile'}>
                                            Tài khoản của tôi
                                        </Link>
                                        <Link className='px-4 py-3 hover:bg-gray-50 hover:text-cyan-500' to={'/cart'}>
                                            Đơn mua
                                        </Link>
                                        <button onClick={handleLogout} className='px-4 py-3 text-left hover:bg-gray-50 hover:text-cyan-500'>
                                            Đăng xuất
                                        </button>
                                    </div>
                                }
                                className='flex cursor-pointer items-center text-sm font-normal hover:text-gray-300'
                                as={'li'}
                            >
                                <div className='mr-2 h-6 w-6 flex-shrink-0'>
                                    <img
                                        className='h-full w-full rounded-full bg-white object-cover'
                                        src='https://down-vn.img.susercontent.com/file/vn-11134226-7r98o-ly3hoa0zu0lseb_tn'
                                        alt=''
                                    />
                                </div>
                                <div>{auth.userProfile?.email}</div>
                            </Popover>
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
                                onChange={handleOnChangeForm}
                                type='search'
                                placeholder='FREE SHIP TỪ ĐƠN 0Đ'
                                className='ml-2 w-[92%] -translate-x-1 placeholder:font-light focus:outline focus:outline-[1.5px] focus:outline-offset-[13px] focus:outline-black'
                            />
                            <button type='submit' className='h-[34px] w-[8%] rounded-sm bg-shopeeOrange px-4 hover:bg-opacity-95'>
                                <SearchIcon className='mx-auto h-4 w-4 font-bold text-white' />
                            </button>
                            {!!onChangeForm && <div className='absolute bottom-0 left-0 right-0 translate-y-6 transform bg-white'>123</div>}
                        </form>
                    </div>
                    <Popover
                        renderPopover={
                            <div className='w-[400px] rounded-sm border bg-white shadow-md'>
                                {/* Header */}
                                <p className='p-2 text-base capitalize text-gray-400'>Sản phẩm mới thêm</p>
                                <ul>
                                    {Array(5)
                                        .fill(0)
                                        .map((_, index) => (
                                            <li key={index}>
                                                <Link to={'/'} className='flex p-2 text-sm hover:bg-gray-100'>
                                                    <img
                                                        src='https://down-vn.img.susercontent.com/file/vn-11134201-23020-n6grtz4qgnnv23'
                                                        className='h-[60px] w-[60px] object-cover'
                                                        alt=''
                                                    />
                                                    <div className='ml-2 flex-grow overflow-hidden'>
                                                        <div className='truncate'>
                                                            Dép đúc quai ngang vân gỗ nam, nữ siêu nhẹ DUWA - Hàng chính hãng - SH211
                                                        </div>
                                                    </div>
                                                    <div className='ml-2 flex-shrink-0 text-orange-500'>
                                                        <span>đ 20000</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                                <div className='flex items-center justify-between bg-gray-50 p-2'>
                                    <div className='text-sm'>Thêm hàng vào giỏ hàng</div>
                                    <Link
                                        to={'/'}
                                        className='rounded-sm bg-shopeeOrange px-4 py-2 text-sm capitalize text-white hover:opacity-90'
                                    >
                                        Xem giỏ hàng
                                    </Link>
                                </div>
                            </div>
                        }
                    >
                        <Link to='/' className='col-span-1 flex items-center justify-center'>
                            <CartIcon className='h-7 w-7 text-white' />
                        </Link>
                    </Popover>
                </nav>
            </div>
        </header>
    );
}
