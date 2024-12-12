'use client'

import { DataTable } from "@/components/data-loading/DataTable"
import { IOrderColumn, ordersColumns } from "./OrdersColumns"
import styles from '../Admin.module.scss'
import DataTableLoading from "@/components/data-loading/DataTableLoading"
import Heading from "@/components/ui/Heading/Heading"
import { useGetOrders } from "@/hooks/queries/orders/useGetOrders"
import { formattedStatus } from "@/utils/formattedStatus"

export default function Orders() {

    const {orders, isLoading} = useGetOrders()

    const formattedOrders: IOrderColumn[] = orders ? orders.map(order=>({
        id: order.id,
        createdAt: new Date(order.createdAt).toDateString(),
        status: order.status,
        statusText: order.status !== undefined ? formattedStatus(order.status) : 'Статус не указан',
        items: order.items,
        total: order.total,
        fullname: order.fullname,
    })) : []

    return (
        <div className={styles.wrapper}>
            {isLoading ? (
                <DataTableLoading />
            ) : (
                <>
                    <Heading title={`Заказов (${orders?.length})`} description='Все заказы' >
                    </Heading>

                    <div className={styles.table}>
                        <DataTable columns={ordersColumns} data={formattedOrders} filterKey="fullname"></DataTable>
                    </div>
                </>
            )}
        </div>
    )
}