'use client'

import { DataTable } from "@/components/data-loading/DataTable"
import { IReviewColumn, reviewsColumns } from "./ReviewsColumns"
import styles from '../Admin.module.scss'
import DataTableLoading from "@/components/data-loading/DataTableLoading"
import Heading from "@/components/ui/Heading/Heading"
import { Button } from "@/components/ui/Button"
import { Plus } from "lucide-react"
import { useModal } from "@/Providers/Modal.provider"
import { useGetReviews } from "@/hooks/queries/reviews/useGetReviews"
import { useCreateReviewLink } from "@/hooks/queries/reviews/useCreateReviewLink"

export default function Reviews() {

    const {reviews, isLoading} = useGetReviews()

    const {createReviewLink, isLoadingCreateLink} = useCreateReviewLink()

    const formattedReviews: IReviewColumn[] = reviews ? reviews.map(review=>({
        id: review.id,
        createdAt: review.createdAt,
        text: review.text,
        rating: review.rating,
        user: review.user,
        email: review.user.email
    })) : []

    const ReviewLinkCreateModal = () => {
        createReviewLink()
    };

    return (
        <div className={styles.wrapper}>
            {isLoading ? (
                <DataTableLoading />
            ) : (
                <>
                    <Heading title={`Отзывов (${reviews?.length})`} description='Все отзывы' >
                        <Button variant='default' disabled={isLoadingCreateLink} onClick={ReviewLinkCreateModal}>
                            <Plus></Plus>
                            Создать ссылку на отзыв
                        </Button>
                    </Heading>

                    <div className={styles.table}>
                        <DataTable columns={reviewsColumns} data={formattedReviews} filterKey="email"></DataTable>
                    </div>
                </>
            )}
        </div>
    )
}