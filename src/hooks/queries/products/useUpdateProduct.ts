import { productService } from "@/services/product.service"
import { IProductInput } from "@/shared/types/product.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useUpdateProduct = (productId: string) => {
    // const params = useParams<{productId:string}>()

    const queryClient = useQueryClient()

    const {mutate: updateProduct, isPending: isLoadingUpdate} = useMutation({
        mutationKey: ['update product'],
        mutationFn: (data: IProductInput) =>
            productService.update(productId,data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get products for dashboard']
            })

            toast.success('Товар обновлён')
        },
        onError() {
            toast.error("Ошибка при обновлении товара")
        }
    })

    return useMemo(
        () => ({
            updateProduct,
            isLoadingUpdate
        }),
        [updateProduct, isLoadingUpdate]
    )
}