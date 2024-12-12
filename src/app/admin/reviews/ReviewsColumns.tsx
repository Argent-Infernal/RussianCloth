'use client'

import CardReviewModal from "@/components/modals/CardReview"
import ProductFormModal from "@/components/modals/ProductForm.modal"
import { Button } from "@/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useDeleteReview } from "@/hooks/queries/reviews/useDeleteReview"
import { useModal } from "@/Providers/Modal.provider"
import { IUser } from "@/shared/types/user.interface"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ExternalLink, MoreHorizontal } from "lucide-react"

export interface IReviewColumn {
    id: string,
    createdAt: string,
    text: string,
    rating: number,
    user: IUser,
    email: string
}

export const reviewsColumns: ColumnDef<IReviewColumn>[] = [
    {
        accessorKey: 'email',
        header: ({column}) => {
            return (
                <Button variant='ghost' onClick={()=> column.toggleSorting(column.getIsSorted() === 'asc')}> 
                
                    Email
                    <ArrowUpDown className="ml-2 size-4" ></ArrowUpDown>
                </Button>
            )
        }
    },
    {
        accessorKey: 'rating',
        header: ({column}) => {
            return (
                <Button variant='ghost' onClick={()=> column.toggleSorting(column.getIsSorted() === 'asc')}> 
                
                    Оценка 
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

            const {deleteReview, isLoadingDelete} = useDeleteReview()

            const openDetailsReviewModal = () => {
                showModal(
                    <CardReviewModal
                        review={row.original}
                    />
                );
            };

            const handleDeleteReview = () => {
                deleteReview(row.original.id)
            }

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className="size-8 p-0">
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>Действия</DropdownMenuLabel>
                        <DropdownMenuItem onClick={openDetailsReviewModal}>
                            <ExternalLink className="size-4 mr-2"/>
                            Посмотреть карточку отзыва
                        </DropdownMenuItem>

                        <DropdownMenuItem disabled={isLoadingDelete} onClick={handleDeleteReview}>
                            <ExternalLink className="size-4 mr-2"/>
                            Удалить
                        </DropdownMenuItem>
                    </DropdownMenuContent>

                </DropdownMenu>
            )
        }
    }
]
