import { API_ENDPOINTs } from 'src/constants/apiPath';
import { TCommonResponse } from 'src/types/common.type';
import { TProduct, TProducts, TQueryParamProduct } from 'src/types/product.type';
import httpClient from 'src/utils/https';

class ProductServices {
    private static instance: ProductServices;

    public static getInstance(): ProductServices {
        if (!ProductServices.instance) {
            ProductServices.instance = new ProductServices();
        }
        return ProductServices.instance;
    }

    public readProductDetail(payload: { productId: string }) {
        return httpClient.get<TCommonResponse<TProduct>>(`${API_ENDPOINTs.READ_PRODUCT}/${payload.productId}`);
    }

    public readProducts(payload: { queryParams: TQueryParamProduct }) {
        return httpClient.get<TCommonResponse<TProducts>>(`${API_ENDPOINTs.READ_PRODUCTS}`, {
            params: payload.queryParams
        });
    }
}

const productServices = ProductServices.getInstance();
export default productServices;
