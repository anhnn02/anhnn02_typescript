import { ProductType } from "../pages/types/product";
import instance from "./instance";
import { isAuthenticate } from '../utils/localstorage'

const { user, token } = isAuthenticate();

export const list = () => {
    const url = `news/${user._id}`;
    return instance.get(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const remove = (id: number) => {
    const url = `news/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const create = (product: ProductType) => {
    const url = `news/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (id: number | string) => {
    const url = `news/${id}/${user._id}`;
    return instance.get(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (product: ProductType) => {
    const url = `news/${product._id}/${user._id}`;
    return instance.get(url, product);
}