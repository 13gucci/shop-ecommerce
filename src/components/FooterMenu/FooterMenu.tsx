import { Link } from 'react-router-dom';
import { MenuType } from 'src/constants/footerUrl';

type Props = {
    menu: MenuType[];
};

export default function FooterMenu({ menu }: Props) {
    return (
        <ul>
            {menu.map((menu, index) => (
                <li key={index} className='mb-3 text-footerBlack'>
                    <Link target='_blank' to={menu.url}>
                        {menu.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
