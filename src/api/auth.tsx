import instance from "./instance";

export const signup = (data) => {
    const url = `register`;
    return instance.post(url, data);
}