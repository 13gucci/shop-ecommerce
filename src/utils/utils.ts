export const formatPrice = (beforeFormat: number) => {
    const afterFormat = new Intl.NumberFormat('vi-VN').format(beforeFormat);
    return afterFormat;
};

export const formatSoldProduct = (beforeFormat: number) => {
    const afterFormat = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })
        .format(beforeFormat)
        .replace('.', ',')
        .replace('K', 'k');

    return afterFormat;
};

export const renderArrayPaginate = ({ page, page_size, range }: { page: number; page_size: number; range: number }) => {
    const pages = [];
    const startRange = Math.max(1, page - range);
    const endRange = Math.min(page_size, page + range);

    if (startRange > 1) {
        pages.push(1); // Luôn thêm 1
        if (startRange > 2) {
            pages.push(2); // Thêm 2 nếu cần
        }
        if (startRange > 3) {
            pages.push(0); // Thêm số 0 để ngắt quãng
        }
    }

    for (let i = startRange; i <= endRange; i++) {
        pages.push(i);
    }

    if (endRange < page_size) {
        if (endRange < page_size - 2) {
            pages.push(0); // Thêm số 0 để ngắt quãng
        }
        if (page_size > endRange + 1) {
            pages.push(page_size - 1); // Thêm page_size-1 nếu cần
        }
        pages.push(page_size); // Luôn thêm page_size
    }

    // Loại bỏ các trang bị trùng lặp
    const uniquePages = [...new Set(pages)];

    return uniquePages;
};
export const getRandomProvince = () => {
    const provinces = [
        'Hà Nội',
        'Hồ Chí Minh',
        'Đà Nẵng',
        'Hải Phòng',
        'Cần Thơ',
        'Bình Dương',
        'Đồng Nai',
        'Quảng Ninh',
        'Khánh Hòa',
        'Lâm Đồng',
        'Nghệ An',
        'Thanh Hóa',
        'Thái Nguyên',
        'Bắc Giang',
        'Bình Thuận',
        'Bình Định',
        'Cà Mau',
        'Đắk Lắk',
        'Điện Biên',
        'Hà Tĩnh'
    ];

    // Chọn ngẫu nhiên một tỉnh thành từ danh sách
    return provinces[(Math.random() * provinces.length) | 0];
};
export const splitPath = (path: string) => {
    // Remove leading and trailing slashes for easier processing
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // Split the trimmed path
    const parts = trimmedPath.split('/');
    // Add the leading slash as the first element if the original path started with a slash
    if (path.startsWith('/')) {
        parts.unshift('/');
    }
    return parts;
};

export type NoUndefinedField<T> = {
    [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>;
};
