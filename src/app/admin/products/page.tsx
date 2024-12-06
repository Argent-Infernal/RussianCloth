import type {Metadata} from 'next'
import Products from './Products'

export const metadata: Metadata = {
    title: 'Список товаров',
}

export default function AdminProductsPage() {
    return (
        <Products></Products>
    )
}