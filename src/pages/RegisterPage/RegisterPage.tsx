import { Link } from 'react-router-dom';
import { PATHS } from 'src/constants/navPaths';

export default function RegisterPage() {
    return (
        <>
            <div className='bg-shopeeOrange'>
                <div className='mx-auto max-w-[1200px] px-4'>
                    <div className='grid h-[600px] grid-cols-1 bg-main bg-contain bg-center bg-no-repeat py-5 md:grid-cols-4 lg:grid-cols-5 lg:py-[60px]'>
                        <div className='col-span-1 md:col-span-2 md:col-start-2 lg:col-span-2 lg:col-start-4'>
                            <form className='rounded bg-white p-6 shadow-sm lg:w-[400px]'>
                                {/* Header form */}
                                <div className='flex items-center justify-between'>
                                    <div className='text-xl font-normal'>Đăng ký</div>
                                </div>

                                {/* Main */}

                                <div className='mt-7'>
                                    {/* Field input */}
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email/Số điện thoại/Tên đăng nhập'
                                        className='h-10 w-full rounded-sm border border-gray-300 px-3 text-sm outline-none placeholder:text-[13px] placeholder:text-gray-300 focus:border-[1px] focus:border-gray-600 focus:bg-gray-50 focus:shadow-sm'
                                    />
                                    {/* Error message */}
                                    <div className='mt-1 min-h-[1.5rem] text-[12px] text-textError'>Vui lòng điền vào trường này.</div>
                                </div>

                                <div className='mt-3'>
                                    {/* Field input */}
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Mật khẩu'
                                        className='h-10 w-full rounded-sm border border-gray-300 px-3 text-sm outline-none placeholder:text-[13px] placeholder:text-gray-300 focus:border-[1px] focus:border-gray-600 focus:bg-gray-50 focus:shadow-sm'
                                    />
                                    {/* Error message */}
                                    <div className='mt-1 min-h-[1.5rem] text-[12px] text-textError'>Vui lòng điền vào trường này.</div>
                                </div>
                                <div className='mt-3'>
                                    {/* Field input */}
                                    <input
                                        type='confirm_password'
                                        name='confirm_password'
                                        placeholder='Xác nhận mật khẩu'
                                        className='h-10 w-full rounded-sm border border-gray-300 px-3 text-sm outline-none placeholder:text-[13px] placeholder:text-gray-300 focus:border-[1px] focus:border-gray-600 focus:bg-gray-50 focus:shadow-sm'
                                    />
                                    {/* Error message */}
                                    <div className='mt-1 min-h-[1.5rem] text-[12px] text-textError'>Vui lòng điền vào trường này.</div>
                                </div>

                                <div className='mt-5'>
                                    <button className='h-10 w-full bg-shopeeOrange text-sm uppercase text-white'>Đăng ký</button>
                                </div>

                                <div className='mt-3 flex items-center'>
                                    <div className='w-full border-b'></div>
                                    <div className='mx-2 text-sm uppercase text-gray-400'>Hoặc</div>
                                    <div className='w-full border-b'></div>
                                </div>

                                <div className='mt-4 text-center text-sm'>
                                    Bạn đã có tài khoản?{' '}
                                    <Link className='text-shopeeOrange' to={PATHS.AUTH_PAGES.LOGIN}>
                                        Đăng nhập ngay
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
