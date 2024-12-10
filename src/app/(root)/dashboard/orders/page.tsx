import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type {Metadata} from 'next'
import { Orders } from './Orders'

export const metadata: Metadata = {
    title: 'Список заказов',
    ...NO_INDEX_PAGE
}

export default function OrderPage() {
    return <Orders/>
}