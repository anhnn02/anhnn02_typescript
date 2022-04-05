import { ProductType } from "../pages/types/product";
import instance from "./instance";
import { isAuthenticate } from '../utils/localstorage'

const {user, token} = isAuthenticate();

export const list = () => {
    const url = `products`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `product/${id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const create = (product: ProductType) => {
    const url = `products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (id: number | string) => {
    const url = `product/${id}`;
    return instance.get(url);
}
export const update = (product: ProductType) => {
    const url = `product/${product._id}`;
    return instance.put(url, product);
}
export const search = (keyword) => {
    const url = `search?name=${keyword}`;
    return instance.get(url);
}