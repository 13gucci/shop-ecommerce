import { MenuType } from 'src/constants/footerUrl';

type Props = {
    menu: MenuType[];
};

export default function FooterMenu2({ menu }: Props) {
    return (
        <ul className='flex flex-wrap gap-2'>
            {menu.map((menu, index) => (
                <li key={index} className='bg-white rounded-sm shadow-sm box-border h-[1.875rem] overflow-hidden p-1 w-[3.75rem]'>
                    <img src={menu.url} alt={menu.title} />
                </li>
            ))}
        </ul>
    );
}
