import instance from "./instance";

type User = {
    email: string,
    password: string
}

export const signup = (dataUser) => {
    const url = `register`;
    return instance.post(url, dataUser);
}
export const signin = (dataUser: User) => {
    const url = `login`;
    return instance.post(url, dataUser);
}
