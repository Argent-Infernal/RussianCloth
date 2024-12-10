import { orderService } from "@/services/order.service"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"


export const useGetOrder = (id:string) => {
    const {data: order, isLoading} = useQuery({
        queryKey: ['get order for dashboard'],
        queryFn: () => orderService.getById(id)
    })

    return useMemo(
        () => ({
            order,
            isLoading
        }),[order, isLoading]
    )
}