import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type {Metadata} from 'next'
import { Dashboard } from './dashboard'

export const metadata: Metadata = {
    title: 'Корзина',
    ...NO_INDEX_PAGE
}

export default function DashboardPage() {
    return <Dashboard/>
}