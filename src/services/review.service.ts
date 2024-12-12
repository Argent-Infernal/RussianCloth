import { axiosClassic, axiosWithAuth } from "@/api/api.interceptors"
import { API_URL } from "@/config/api.config"
import { IReview, IReviewInput } from "@/shared/types/review.interface"

class ReviewService {
    async create(reviewLinkId:string,data: IReviewInput) {
        const {data: createdReview} = await axiosWithAuth<IReview>({
            url: API_URL.reviews(`/${reviewLinkId}`),
            method: 'POST',
            data
        })

        return createdReview
    }

    async delete(id: string) {
        const {data: deletedReview} = await axiosWithAuth<IReview>({
            url: API_URL.reviews(`/${id}`),
            method: 'DELETE',
        })

        return deletedReview
    }

    async getAll() {
        const {data: reviews} = await axiosClassic<IReview[]>({
            url: API_URL.reviews(),
            method: 'GET',
        })

        return reviews
    }
}

export const reviewService = new ReviewService()