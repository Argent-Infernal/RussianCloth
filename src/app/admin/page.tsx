import type {Metadata} from 'next'
import Statistic from './Statistic'

export const metadata: Metadata = {
    title: 'Админ панель',
}

export default function AdminPage() {
    return (
        <div>
            <Statistic/>
        </div>
    )
}