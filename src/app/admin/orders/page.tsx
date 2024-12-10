import type {Metadata} from 'next'
import Orders from './Orders'

export const metadata: Metadata = {
    title: 'Список заказов',
}

export default function AdminProductsPage() {
    return (
        <Orders></Orders>
    )
}