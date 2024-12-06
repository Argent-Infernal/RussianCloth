import { userService } from "@/services/user.service"
import { IUserRole } from "@/shared/types/user.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useUpdateRoleUser = () => {

    const queryClient = useQueryClient()

    const {mutate: updateRole, isPending: isLoading} = useMutation({
        mutationKey: ['update role user'],
        mutationFn: (data:IUserRole) =>
            userService.updateRole(data.id, data.role),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get users for dashboard']
            })

            toast.success('Роль пользователя обновлена')
        },
        onError() {
            toast.error("Ошибка при обновлении роли")
        }
    })

    return useMemo(
        () => ({
            updateRole,
            isLoading
        }),
        [updateRole, isLoading]
    )
}