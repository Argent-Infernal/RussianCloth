import { reviewService } from "@/services/review.service"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"


export const useGetReviews = () => {
    const {data: reviews, isLoading} = useQuery({
        queryKey: ['get reviews for dashboard'],
        queryFn: () => reviewService.getAll()
    })

    return useMemo(
        () => ({
            reviews,
            isLoading
        }),[reviews, isLoading]
    )
}