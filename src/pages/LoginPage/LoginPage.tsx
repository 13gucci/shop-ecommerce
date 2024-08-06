import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import HidePasswordIcon from 'src/common/HidePasswordIcon';
import QRLoginLogo from 'src/common/QRLoginLogo';
import VisiblePasswordIcon from 'src/common/VisiblePasswordIcon';
import CustomButton from 'src/components/CustomButton';
import CustomInput from 'src/components/CustomInput';
import { PATHS } from 'src/constants/navPaths';
import { TitlePages } from 'src/constants/titlePage';
import { AuthContext } from 'src/contexts/auth.context';
import { LoginFormType, LoginSchema } from 'src/schema/AuthenticationSchema';
import authenticateSerivce from 'src/services/auth.services';
import { TCommonResponse } from 'src/types/common.type';
import { isUnprocessableEntityError } from 'src/utils/error';

export default function LoginPage() {
    const { dispatch } = useContext(AuthContext);
    const {
        register,
        setError,
        formState: { errors },
        handleSubmit
    } = useForm<LoginFormType>({
        resolver: yupResolver(LoginSchema)
    });

    const [isShowQr, setIsShowQr] = useState<boolean>(false);
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

    useEffect(() => {
        document.title = TitlePages.LOGIN;
    }, []);

    const toggleVisiblePassword = () => {
        setIsVisiblePassword((prevState) => !prevState);
    };

    const close = () => {
        setIsShowQr(false);
    };

    const { mutate: loginMutation, isPending } = useMutation({
        mutationFn: (body: LoginFormType) => authenticateSerivce.login(body)
    });

    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        loginMutation(data, {
            onSuccess: (data) => {
                if (data.data.data) {
                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            isLoggedIn: true,
                            userProfile: data.data.data.user
                        }
                    });
                }
            },
            onError: (err) => {
                if (isUnprocessableEntityError<TCommonResponse<LoginFormType>>(err)) {
                    const objErrorForm = err.response?.data.data;
                    if (objErrorForm) {
                        Object.keys(objErrorForm).forEach((key) => {
                            setError(key as keyof LoginFormType, {
                                message: objErrorForm[key as keyof LoginFormType],
                                type: 'server'
                            });
                        });
                    }
                }
            }
        });
    };

    return (
        <>
            <div className='bg-shopeeOrange'>
                <div className='container'>
                    <div className='grid h-[600px] grid-cols-1 bg-main bg-contain bg-center bg-no-repeat py-5 md:grid-cols-4 lg:grid-cols-5 lg:py-[60px]'>
                        <div className='col-span-1 md:col-span-2 md:col-start-2 lg:col-span-2 lg:col-start-4'>
                            <form onSubmit={handleSubmit(onSubmit)} className='rounded bg-white p-6 shadow-sm lg:w-[400px]' noValidate>
                                {/* Header form */}
                                <div className='flex items-center justify-between'>
                                    <div className='text-xl font-normal'>Đăng nhập</div>
                                    <div className='relative flex h-[59px] w-[165px] items-center justify-center rounded-sm border-2 border-[#ffbf00] bg-[#fefaec] px-[14px] py-[11px]'>
                                        <span className='text-sm font-bold text-[#ffbf00]'>Đăng nhập với mã QR</span>
                                        <div className='absolute right-0 h-[12px] w-[12px] translate-x-[60%] rotate-45 border-r-2 border-t-2 border-[#ffbf00] bg-[#fefaec]'></div>
                                    </div>
                                    <button type='button' onClick={() => setIsShowQr(true)}>
                                        <QRLoginLogo />
                                    </button>
                                </div>

                                <CustomInput
                                    autoComplete='on'
                                    name='email'
                                    register={register}
                                    type='email'
                                    className='mt-7'
                                    errorMessage={errors.email?.message}
                                    placeholder='Email/Tên tài khoản/Số điện thoại'
                                />

                                <div className='mt-1'>
                                    {/* Field input */}
                                    <div className='group flex h-10 rounded-sm border border-gray-300 focus-within:border-gray-600 focus-within:bg-gray-50 focus-within:shadow-sm'>
                                        <input
                                            type={isVisiblePassword ? 'text' : 'password'}
                                            placeholder='Mật khẩu'
                                            {...register('password')}
                                            className='h-full w-[90%] px-3 outline-none placeholder:text-[13px] placeholder:text-gray-300 group-focus-within:border-gray-600 group-focus-within:bg-gray-50'
                                        />
                                        <button
                                            type='button'
                                            onClick={toggleVisiblePassword}
                                            className='w-[10%] group-focus-within:bg-gray-50'
                                        >
                                            {isVisiblePassword ? <HidePasswordIcon /> : <VisiblePasswordIcon />}
                                        </button>
                                    </div>
                                    {/* Error message */}
                                    <div className='mt-1 min-h-[1.5rem] text-[12px] text-textError'>{errors.password?.message}</div>
                                </div>

                                <div className='mt-5'>
                                    <CustomButton
                                        isLoading={isPending}
                                        type='submit'
                                        className='h-10 w-full bg-shopeeOrange text-sm uppercase text-white'
                                    >
                                        Đăng nhập
                                    </CustomButton>
                                </div>

                                <div className='mt-2'>
                                    <div className='flex justify-between text-[12px] text-[#05a]'>
                                        <p className='cursor-pointer'>Quên mật khẩu</p>
                                        <p className='cursor-pointer'>Đăng nhập với SMS</p>
                                    </div>
                                </div>

                                <div className='mt-3 flex items-center'>
                                    <div className='w-full border-b'></div>
                                    <div className='mx-2 text-sm uppercase text-gray-400'>Hoặc</div>
                                    <div className='w-full border-b'></div>
                                </div>

                                <div className='mt-4 text-center text-sm'>
                                    Bạn mới biết đến Shopee?{' '}
                                    <Link className='text-shopeeOrange' to={PATHS.AUTH_PAGES.REGISTER}>
                                        Đăng ký ngay
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog open={isShowQr} as='div' className='relative z-10 focus:outline-none' onClose={close}>
                <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                    <DialogBackdrop transition className='fixed inset-0 bg-black/20' />

                    <div className='flex min-h-full items-center justify-center p-4'>
                        <DialogPanel
                            transition
                            className='data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0'
                        >
                            <p className='mt-2 text-sm/6 text-black'>Updating....</p>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
