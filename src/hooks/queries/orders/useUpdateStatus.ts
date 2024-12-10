import { orderService } from "@/services/order.service"
import { IOrderStatus } from "@/shared/types/order.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useUpdateOrderStatus = () => {

    const queryClient = useQueryClient()

    const {mutate: updateStatus, isPending: isLoading} = useMutation({
        mutationKey: ['update role user'],
        mutationFn: (data:IOrderStatus) =>
            orderService.update(data.id, data.status),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get orders for dashboard']
            })

            toast.success('Статус заказа обновлён')
        },
        onError() {
            toast.error("Ошибка при обновлении статуса")
        }
    })

    return useMemo(
        () => ({
            updateStatus,
            isLoading
        }),
        [updateStatus, isLoading]
    )
}