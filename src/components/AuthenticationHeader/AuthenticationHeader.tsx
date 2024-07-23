import { Link } from 'react-router-dom';
import MainLogo from 'src/common/MainLogo';
import { PATHS } from 'src/constants/navPaths';

export default function AuthenticationHeader() {
    return (
        <header className='py-5'>
            {/* Container */}
            <div className='max-w-[1200px] mx-auto px-4'>
                <div className='flex items-center justify-between'>
                    <nav className='flex items-end'>
                        <Link to={PATHS.AUTH_PAGES.HOME} className='px-4'>
                            <MainLogo className='h-9 xl:h-11 fill-shopeeOrange' />
                        </Link>
                        <span className='text-xl xl:text-2xl'>Đăng ký</span>
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
