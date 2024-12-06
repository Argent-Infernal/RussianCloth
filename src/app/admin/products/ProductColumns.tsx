'use client'

import ProductFormModal from "@/components/modals/ProductForm.modal"
import { Button } from "@/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useModal } from "@/Providers/Modal.provider"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ExternalLink, MoreHorizontal } from "lucide-react"

export interface IProductColumn {
    id:string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    images: string[]
}

export const productColumns: ColumnDef<IProductColumn>[] = [
    {
        accessorKey: 'title',
        header: ({column}) => {
            return (
                <Button variant='ghost' onClick={()=> column.toggleSorting(column.getIsSorted() === 'asc')}> 
                
                    Название
                    <ArrowUpDown className="ml-2 size-4" ></ArrowUpDown>
                </Button>
            )
        }
    },
    {
        accessorKey: 'price',
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
                
                    createdAt 
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

            const openProductModal = () => {
                showModal(
                    <ProductFormModal
                        product={row.original}
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
                        <DropdownMenuItem onClick={openProductModal}>
                            <ExternalLink className="size-4 mr-2"/>
                            Изменить
                        </DropdownMenuItem>
                    </DropdownMenuContent>

                </DropdownMenu>
            )
        }
    }
]
