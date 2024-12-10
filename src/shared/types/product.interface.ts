export interface IProduct {
    id:string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    images: string[],
    quantity?: number
}

export interface IProductInput extends Omit<IProduct, 'id' | 'createdAt'> {}