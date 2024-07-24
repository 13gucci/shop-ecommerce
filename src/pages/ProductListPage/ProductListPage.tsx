import { useEffect } from 'react';
import { TitlePages } from 'src/constants/titlePage';

export default function ProductListPage() {
    useEffect(() => {
        document.title = TitlePages.HOME;
    }, []);

    return <div>ProductListPage</div>;
}
