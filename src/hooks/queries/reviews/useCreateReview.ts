import { PUBLIC_URL } from "@/config/url.config"
import { reviewService } from "@/services/review.service"
import { IReviewInput } from "@/shared/types/review.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useCreateReview = () => {
    const params = useParams<{reviewLinkId:string}>()
    const router = useRouter()

    const queryClient = useQueryClient()

    const {mutate: createReview, isPending: isLoadingCreate} = useMutation({
        mutationKey: ['create review'],
        mutationFn: (data: IReviewInput) =>
            reviewService.create(params.reviewLinkId,data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get reviews for dashboard']
            })
            router.push(PUBLIC_URL.home())
            toast.success('Отзыв создан')
        },
        onError() {
            toast.error("Ошибка при создании отзыва")
        }
    })

    return useMemo(
        () => ({
            createReview,
            isLoadingCreate
        }),
        [createReview, isLoadingCreate]
    )
}