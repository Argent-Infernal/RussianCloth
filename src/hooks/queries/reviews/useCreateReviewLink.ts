import { reviewLinkService } from "@/services/reviewlinks.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useCreateReviewLink = () => {
    const queryClient = useQueryClient()

    const {mutate: createReviewLink, isPending: isLoadingCreateLink} = useMutation({
        mutationKey: ['create reviewlink'],
        mutationFn: () =>
            reviewLinkService.create(),
        onSuccess(data) {
            toast.success('Ссылка создана')
            window.location.href = data.url
        },
        onError() {
            toast.error("Ошибка при создании ссылки")
        }
    })

    return useMemo(
        () => ({
            createReviewLink,
            isLoadingCreateLink
        }),
        [createReviewLink, isLoadingCreateLink]
    )
}