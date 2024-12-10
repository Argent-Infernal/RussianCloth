import { axiosClassic, axiosWithAuth } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { EnumOrderStatus, EnumShopMethods, IOrder, IOrderStatus, IPaymentResponse } from "@/shared/types/order.interface";
import { IProduct, IProductInput } from "@/shared/types/product.interface";

class OrderService {

    async place(data:IOrder) {
        return axiosWithAuth<IPaymentResponse>({
            url: API_URL.orders('/place'),
            method: 'POST',
            data
        })
    }

    async getAll() {
        const {data} = await axiosWithAuth<IOrder[]>({
            url: API_URL.orders('/get-all'),
            method: 'GET'
        })

        return data || []
    }

    async getById(id:string) {
        const {data} = await axiosWithAuth<IOrder>({
            url: API_URL.orders(`/get-by-id/${id}`),
            method: 'GET'
        })

        return data || []
    }

    async update(id:string, status:EnumOrderStatus) {
        console.log(id)
        console.log(status)

        const {data: updatedOrder} = await axiosWithAuth<IProduct>({
            url: API_URL.orders(`/status-update/${id}`),
            method: 'PUT',
            data: {status}
        })

        return updatedOrder
    }
}

export const orderService = new OrderService()