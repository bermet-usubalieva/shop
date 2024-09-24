export type IProductInCart = {
    id: number,
    image: string,
    price: number,
    title: string,
    discount: number,
    color: string,
    count: number,
}

export type Product = {
    id: number,
    image: string,
    price: number,
    title: string,
    discount: number,
}

export type FullProduct = Product & {
    brand: string,
    category: string,
    color: string,
    description: string,
    model: string,
}