import { Link, useLocation } from 'react-router-dom';
import MainLogo from 'src/common/MainLogo';
import { PATHS } from 'src/constants/navPaths';

export default function AuthenticationHeader() {
    const { pathname } = useLocation();
    const mode = pathname.slice(1);

    return (
        <header className='py-5'>
            {/* Container */}
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <nav className='flex items-end'>
                        <Link to={PATHS.AUTH_PAGES.HOME} className='px-4'>
                            <MainLogo className='h-9 fill-[#d0011b] xl:h-11' />
                        </Link>
                        <span className='text-xl xl:text-2xl'>{mode === 'register' ? 'Đăng ký' : 'Đăng nhập'}</span>
                    </nav>
                    <nav>
                        <Link target='_blank' to={PATHS.AUTH_PAGES.SUPPORT}>
                            <p className='text-sm text-shopeeOrange'>Bạn cần giúp đỡ?</p>
                        </Link>
                    </nav>
                </div>
            </div>
            {/* End Container */}
        </header>
    );
}
