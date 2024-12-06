'use client'

import { DataTable } from "@/components/data-loading/DataTable"
import { useGetUsers } from "@/hooks/queries/users/useGetUsers"
import { IUserColumn, userColumns } from "./UserColumns"
import styles from '../Admin.module.scss'
import DataTableLoading from "@/components/data-loading/DataTableLoading"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import Heading from "@/components/ui/Heading/Heading"

export default function Users() {

    const {users, isLoading} = useGetUsers()

    const formattedUsers: IUserColumn[] = users ? users.map(user=>({
        id:user.id,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        picture: user.picture
    })) : []

    return (
        <div className={styles.wrapper}>
            {isLoading ? (
                <DataTableLoading />
            ) : (
                <>
                    <div className={styles.header}> 
                        <Heading title={`Пользователи (${users?.length})`} description='Все пользователи' />
                    </div>

                    <div className={styles.table}>
                        <DataTable columns={userColumns} data={formattedUsers} filterKey="email"></DataTable>
                    </div>
                </>
            )}
        </div>
    )
}