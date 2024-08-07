import { TCategory } from 'src/types/category.type';
import { TPagination } from 'src/types/pagination.type';

// page: number. Số trang. Mặc định là 1
// limit: number. Số product trên 1 trang. Mặc định là 30
// order: 'desc' || 'asc'. Sắp xếp theo thứ tự. Mặc định là 'desc'
// sort_by: 'createdAt' || 'view' || 'sold' || 'price'. Sắp xếp theo trường. Mặc định là 'createdAt'.
// category: categoryId. Lọc sản phẩm theo category
// exclude: productId. Loại trừ sản phẩm nào đó
// rating_filter: number. Lọc sản phẩm có số sao lớn hơn hoặc bằng rating_filter
// price_max: number. Giá cao nhất
// price_min: number. Giá thấp nhất
// name: string. Tên sản phẩm (lưu ý Tên sản phẩm tiếng Việt phải gõ đầy đủ dấu)

enum ESortBy {
    CREATED_AT = 'createdAt',
    VIEW = 'view',
    SOLD = 'sold',
    PRICE = 'price'
}

enum EORDER {
    DESC = 'desc',
    ASC = 'asc'
}

export type TQueryParamsConfig = {
    page?: number;
    limit?: number;
    order?: EORDER;
    sort_by?: ESortBy;
    category?: string;
    exclude?: string;
    rating_filter?: number;
    price_max?: number;
    price_min?: number;
    name?: string;
};

export type TProduct = {
    _id: string;
    images: string[];
    price: number;
    rating: number;
    price_before_discount: number;
    quantity: number;
    sold: number;
    view: number;
    name: string;
    description: string;
    category: TCategory;
    image: string;
    createdAt: string;
    updatedAt: string;
};

export type TProducts = {
    products: TProduct[];
    pagination: TPagination;
};
