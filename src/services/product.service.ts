import { axiosClassic, axiosWithAuth } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { IProduct, IProductInput } from "@/shared/types/product.interface";

class ProductService {

    async getById(id:string) {
        const {data} = await axiosClassic<IProduct>({
            url: API_URL.products(`/by-id/${id}`),
            method: 'GET'
        })

        return data
    }

    async getAll() {
        const {data} = await axiosClassic<IProduct[]>({
            url: API_URL.products(),
            method: 'GET'
        })

        return data || []
    }

    async create(data: IProductInput) {
        const {data: createdProduct} = await axiosWithAuth<IProduct[]>({
            url: API_URL.products(),
            method: 'POST',
            data
        })

        return createdProduct
    }

    async update(id:string, data:IProductInput) {
        const {data: updatedProduct} = await axiosWithAuth<IProduct>({
            url: API_URL.products(`/${id}`),
            method: 'PUT',
            data
        })

        return updatedProduct
    }

    async delete(id:string) {
        const {data: deletedProduct} = await axiosWithAuth<IProduct>({
            url: API_URL.products(`/${id}`),
            method: 'DELETE',
        })

        return deletedProduct
    }
}

export const productService = new ProductService()