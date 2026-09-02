export interface Product {
    id: string,
    name: string,
    slug: string,
    description: string,
    imageURL: string,
    price: number,
}
export interface UpdateProduct {
    name: string,
    slug: string,
    description: string,
    imageURL: string,
    price: number,
}