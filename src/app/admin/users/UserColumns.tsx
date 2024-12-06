'use client'

import UserRoleModal from "@/components/modals/UserRole.modal"
import { Button } from "@/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useModal } from "@/Providers/Modal.provider"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ExternalLink, MoreHorizontal } from "lucide-react"
import Link from "next/link"

export interface IUserColumn {
    id: string,
    email: string,
    role: string,
    createdAt: string,
    picture: string
}

export const userColumns: ColumnDef<IUserColumn>[] = [
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
        accessorKey: 'role',
        header: ({column}) => {
            return (
                <Button variant='ghost' onClick={()=> column.toggleSorting(column.getIsSorted() === 'asc')}> 
                
                    Role 
                    <ArrowUpDown className="ml-2 size-4" ></ArrowUpDown>
                </Button>
            )
        },
        cell: ({row}) => (
            <div>
                {row.original.role === 'admin' ? (
                    <h1 className="text-red-500" >admin</h1>
                ): (
                    <h1 className="text-green-500" >user</h1>
                )}
            </div>
        )
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

            const openRoleModal = () => {
                showModal(
                    <UserRoleModal
                        userId = {row.original.id}
                        userRole = {row.original.role}
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
                        <DropdownMenuItem onClick={openRoleModal}>
                            <ExternalLink className="size-4 mr-2"/>
                            Изменить роль
                        </DropdownMenuItem>
                    </DropdownMenuContent>

                </DropdownMenu>
            )
        }
    }
]
