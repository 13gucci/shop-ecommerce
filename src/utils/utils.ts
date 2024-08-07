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
