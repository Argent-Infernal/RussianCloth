import { userService } from "@/services/user.service"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

export const useGetOrders = () => {
    const {data: orders, isLoading} = useQuery({
        queryKey: ['get orders for dashboard'],
        queryFn: () => userService.getOrders()
    })

    return useMemo(
        () => ({
            orders,
            isLoading
        }),[orders, isLoading]
    )
}