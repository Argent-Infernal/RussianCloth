import { productService } from "@/services/product.service"
import { reviewService } from "@/services/review.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useDeleteReview = () => {
    // const params = useParams<{productId:string}>()
    const queryClient = useQueryClient()

    const {mutate: deleteReview, isPending: isLoadingDelete} = useMutation({
        mutationKey: ['delete review'],
        mutationFn: (reviewId:string) =>
            reviewService.delete(reviewId),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get reviews for dashboard']
            })

            toast.success('Отзыв удалён')
        },
        onError() {
            toast.error("Ошибка при удалении отзыва")
        }
    })

    return useMemo(
        () => ({
            deleteReview,
            isLoadingDelete
        }),
        [deleteReview, isLoadingDelete]
    )
}