import { orderService } from "@/services/order.service"
import { IOrder } from "@/shared/types/order.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useCheckout = () => {

    const queryClient = useQueryClient()

    const {mutate: createPayment, isPending: isLoadingCreate} = useMutation({
        mutationKey: ['create order and payment'],
        mutationFn: (data: IOrder) => orderService.place(
            data
        ),
        onSuccess({data}) {
            queryClient.invalidateQueries({
                queryKey: ['get orders for dashboard']
            })
            window.location.href = data.confirmation.confirmation_url
        },
        onError() {
            toast.error('Ошибка при создании платежа')
        }
    })

    return useMemo(
        ()=> ({
            createPayment, isLoadingCreate
        }),
        [createPayment, isLoadingCreate]
    )
}