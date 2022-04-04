export const formatPrice = (price: number | string): string =>  {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return formatter.format(price);
};

export const formatPercent = (salePrice: number | string, regularPrice: number | string) => {
    const percentSale = 100 - ((salePrice / regularPrice) * 100)
    return Math.round(percentSale) + '%';
}

