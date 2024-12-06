import type {Metadata} from 'next'
import Users from './Users'

export const metadata: Metadata = {
    title: 'Список пользователей',
}

export default function AdminUsersPage() {
    return (
        <Users></Users>
    )
}