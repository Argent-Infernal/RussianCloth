import { axiosWithAuth } from "@/api/api.interceptors"
import { API_URL } from "@/config/api.config"
import { IReviewLink } from "@/shared/types/review.interface"

class ReviewLinkService {
    async create() {
        const {data: createdLink} = await axiosWithAuth<IReviewLink>({
            url: API_URL.rivewlinks(),
            method: 'POST',
        })

        return createdLink
    }
}

export const reviewLinkService = new ReviewLinkService()