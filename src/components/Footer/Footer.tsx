import { aboutUss, contactsUs, customerServices, payments, shippings } from 'src/constants/footerUrl';
import FooterCol from '../FooterCol';
import FooterMenu from '../FooterMenu';
import FooterMenu2 from '../FooterMenu2';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='bg-footerBackground py-12'>
            {/* Container */}
            <div className='container'>
                {/* List Col */}
                <div className='grid grid-cols-1 gap-5 text-left md:grid-cols-3 xl:grid-cols-5'>
                    <FooterCol title='Chăm sóc khác hàng'>
                        <FooterMenu menu={customerServices} />
                    </FooterCol>
                    <FooterCol title='về shoppe'>
                        <FooterMenu menu={aboutUss} />
                    </FooterCol>
                    <FooterCol>
                        <FooterCol title='thanh toán'>
                            <FooterMenu2 menu={payments} />
                        </FooterCol>
                        <FooterCol title='đơn vị vận chuyển'>
                            <FooterMenu2 menu={shippings} />
                        </FooterCol>
                    </FooterCol>
                    <FooterCol title='theo dõi chúng tôi'>
                        <ul>
                            {contactsUs.map((menu, index) => (
                                <li key={index}>
                                    <Link to={menu.urlContact} className='mb-3 flex items-center gap-2 text-footerBlack'>
                                        <img src={menu.url} alt={menu.title} />
                                        <span>{menu.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FooterCol>
                    <FooterCol title='tải ứng dụng shoppe ngay thôi'>
                        <div className='flex'>
                            <img
                                className='mr-3 inline-block rounded-sm bg-white p-1 shadow-sm'
                                src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472'
                                alt=''
                            />
                            <div className='flex flex-col'>
                                <img src='' alt='' />
                            </div>
                        </div>
                    </FooterCol>
                </div>

                <div className='mt-10 grid grid-cols-1 gap-4 border-t-[0.5px] py-10 text-center text-sm text-footerBlack lg:grid-cols-3'>
                    <div className='lg:col-span-1'>© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
                    <div className='lg:col-span-2'>
                        Quốc gia & Khu vực: Singapore Indonesia Thái Lan Malaysia Việt Nam Philippines Brazil México Colombia Chile Đài Loan
                    </div>
                </div>
                <div className='mt-10 text-center text-sm text-footerBlack'>
                    <div>Công ty TNHH Shopee</div>
                    <div className='mt-6'>
                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà
                        Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                    </div>
                    <div className='mt-2'>
                        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
                    </div>
                    <div className='mt-2'>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
                    <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
                </div>
            </div>
            {/* End Container */}
        </footer>
    );
}
