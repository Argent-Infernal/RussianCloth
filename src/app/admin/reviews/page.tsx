import type {Metadata} from 'next'
import Reviews from './Reviews'

export const metadata: Metadata = {
    title: 'Список отзывов',
}

export default function AdminReviewsPage() {
    return (
        <Reviews></Reviews>
    )
}