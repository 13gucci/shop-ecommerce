import { useSearchParams } from 'react-router-dom';

export default function useQueryParams() {
    const [searchParams] = useSearchParams();
    // console.log([...searchParams]); //[['key', 'value']]
    return Object.fromEntries([...searchParams]); //Make above become object {key: 'value'}
}
