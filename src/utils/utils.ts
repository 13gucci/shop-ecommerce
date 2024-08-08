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
