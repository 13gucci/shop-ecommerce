import { API_ENDPOINTs } from 'src/constants/apiPath';
import { TCategory } from 'src/types/category.type';
import { TCommonResponse } from 'src/types/common.type';
import httpClient from 'src/utils/https';

class CategoryServices {
    private static instance: CategoryServices;

    private constructor() {}

    public static getInstance(): CategoryServices {
        if (!CategoryServices.instance) {
            CategoryServices.instance = new CategoryServices();
        }
        return CategoryServices.instance;
    }

    public readCategories() {
        return httpClient.get<TCommonResponse<TCategory[]>>(API_ENDPOINTs.READ_CATEGORIES);
    }
}

const categoryServices = CategoryServices.getInstance();
export default categoryServices;
