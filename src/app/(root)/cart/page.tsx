import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type {Metadata} from 'next'
import { Cart } from './cart'

export const metadata: Metadata = {
    title: 'Корзина',
    ...NO_INDEX_PAGE
}

export default function CartPage() {
    return <Cart/>
}