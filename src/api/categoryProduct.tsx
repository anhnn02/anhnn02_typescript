import instance from "./instance";

type CategoryProps = {
    name: string,
}

export const list = () => {
    const url = `categoryPros`;
    return instance.get(url);
}
export const read = (id: number | string) => {
    const url = `categoryPros/${id}`;
    return instance.get(url);
}
export const create = (category: CategoryProps) => {
    const url = `categoryPros`;
    return instance.post(url, category);
}
export const update = (category: CategoryProps) => {
    const url = `categoryPro/${category._id}`;
    return instance.put(url, category);
}
export const remove = (id: number) => {
    const url = `categoryPro/${id}`;
    return instance.delete(url);
}
export const get = (id: number) => {
    const url = `categoryPro/${id}`;
    return instance.get(url);
}
