import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type {Metadata} from 'next'
import { Order } from './Order'

export const metadata: Metadata = {
    title: 'Оформление заказа',
    ...NO_INDEX_PAGE
}

export default function OrderPage() {
    return <Order/>
}