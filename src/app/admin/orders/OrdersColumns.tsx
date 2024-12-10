'use client'

import OrderDetailsModal from "@/components/modals/OrderDetails.modal"
import OrderStatusModal from "@/components/modals/OrderStatus.modal"
import { Button } from "@/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useModal } from "@/Providers/Modal.provider"
import { EnumOrderStatus, IOrderItem } from "@/shared/types/order.interface"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ExternalLink, MoreHorizontal } from "lucide-react"

export interface IOrderColumn {
    id: string
    createdAt: string
    status?: EnumOrderStatus
    total: number
    items: IOrderItem[]
    fullname:string
}

export const ordersColumns: ColumnDef<IOrderColumn>[] = [
    {
        accessorKey: 'fullname',
        header: ({column}) => {
            return (
                <Button variant='ghost' onClick={()=> column.toggleSorting(column.getIsSorted() === 'asc')}> 
                
                    ФИО
                    <ArrowUpDown className="ml-2 size-4" ></ArrowUpDown>
                </Button>
            )
        }
    },
    {
        accessorKey: 'total',
        header: ({column}) => {
            return (
                <Button variant='ghost' onClick={()=> column.toggleSorting(column.getIsSorted() === 'asc')}> 
                
                    Цена 
                    <ArrowUpDown className="ml-2 size-4" ></ArrowUpDown>
                </Button>
            )
        }
    },
    {
        accessorKey: 'createdAt',
        header: ({column}) => {
            return (
                <Button variant='ghost' onClick={()=> column.toggleSorting(column.getIsSorted() === 'asc')}> 
                
                    Дата создания 
                    <ArrowUpDown className="ml-2 size-4" ></ArrowUpDown>
                </Button>
            )
        }
    },
    {
        accessorKey: 'status',
        header: ({column}) => {
            return (
                <Button variant='ghost' onClick={()=> column.toggleSorting(column.getIsSorted() === 'asc')}> 
                
                    Статус 
                    <ArrowUpDown className="ml-2 size-4" ></ArrowUpDown>
                </Button>
            )
        }
    },
    {
        accessorKey: 'actions',
        header: 'Действия',
        cell: ({row}) => {

            const { showModal } = useModal();

            const openOrderDetailsModal = () => {
                showModal(
                    <OrderDetailsModal
                        orderColumn={row.original}
                    />
                );
            };

            const openOrderStatusModal = () => {
                showModal(
                    <OrderStatusModal
                        orderId={row.original.id}
                    />
                );
            };

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className="size-8 p-0">
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>Действия</DropdownMenuLabel>
                        <DropdownMenuItem onClick={openOrderDetailsModal}>
                            <ExternalLink className="size-4 mr-2"/>
                            Детали заказа
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={openOrderStatusModal}>
                            <ExternalLink className="size-4 mr-2"/>
                            Изменить статус
                        </DropdownMenuItem>
                    </DropdownMenuContent>

                </DropdownMenu>
            )
        }
    }
]
