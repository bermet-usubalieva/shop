import { FullProduct, IProductInCart } from "../store/modules";

export const setLSCart = (key: string, value: IProductInCart[]) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLSCart = (key: string) => {
    const data = localStorage.getItem(key)
    if (data) return JSON.parse(data)
}

export const removeLS = (key: string) => {
    localStorage.removeItem(key)
}