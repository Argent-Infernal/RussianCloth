import { productService } from "@/services/product.service"
import { IProductInput } from "@/shared/types/product.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useCreateProduct = () => {

    const queryClient = useQueryClient()

    const {mutate: createProduct, isPending: isLoadingCreate} = useMutation({
        mutationKey: ['create product'],
        mutationFn: (data: IProductInput) =>
            productService.create(data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get products for dashboard']
            })

            toast.success('Товар создан')
        },
        onError() {
            toast.error("Ошибка при создании товара")
        }
    })

    return useMemo(
        () => ({
            createProduct,
            isLoadingCreate
        }),
        [createProduct, isLoadingCreate]
    )
}