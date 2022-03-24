import { ProductType } from "../pages/types/product";
import instance from "./instance";

export const list = () => {
    const url = `products`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `product/${id}`;
    return instance.delete(url);
}
export const create = (product: ProductType) => {
    const url = `products`;
    return instance.post(url, product);
}
export const read = (id: number | string) => {
    const url = `product/${id}`;
    return instance.get(url);
}