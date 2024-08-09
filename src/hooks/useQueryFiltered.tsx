import { isUndefined, omitBy } from 'lodash';
import useQueryParams from 'src/hooks/useQueryParams';
import { TQueryString } from 'src/pages/ProductListPage/ProductListPage';

export default function useQueryFiltered() {
    const queryParams: TQueryString = useQueryParams();

    // Lọc các queryParam không cần thiết, và lọc key có value là undefined
    const queryParamFiltered: TQueryString = omitBy(
        {
            page: queryParams.page || '1',
            limit: queryParams.limit || '20',
            sort_by: queryParams.sort_by,
            category: queryParams.category,
            exclude: queryParams.exclude,
            name: queryParams.name,
            order: queryParams.order,
            price_max: queryParams.price_max,
            price_min: queryParams.price_min,
            rating_filter: queryParams.rating_filter
        },
        isUndefined
    );

    return queryParamFiltered;
}
