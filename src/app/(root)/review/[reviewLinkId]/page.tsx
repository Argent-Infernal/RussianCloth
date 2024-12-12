import { Review } from "./Review";
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Создание отзыва',
}

export default function ReviewPage () {
    return <Review/>
}