import { productService } from "@/services/product.service"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"


export const useGetProducts = () => {
    const {data: products, isLoading} = useQuery({
        queryKey: ['get products for dashboard'],
        queryFn: () => productService.getAll()
    })

    return useMemo(
        () => ({
            products,
            isLoading
        }),[products, isLoading]
    )
}