import { productService } from "@/services/product.service"
import { IProductInput } from "@/shared/types/product.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useDeleteProduct = (productId:string) => {
    // const params = useParams<{productId:string}>()
    const queryClient = useQueryClient()

    const {mutate: deleteProduct, isPending: isLoadingDelete} = useMutation({
        mutationKey: ['delete product'],
        mutationFn: (data: IProductInput) =>
            productService.delete(productId),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get products for dashboard']
            })

            toast.success('Товар удалён')
        },
        onError() {
            toast.error("Ошибка при удалении товара")
        }
    })

    return useMemo(
        () => ({
            deleteProduct,
            isLoadingDelete
        }),
        [deleteProduct, isLoadingDelete]
    )
}