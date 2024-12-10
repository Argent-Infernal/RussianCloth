import { userService } from "@/services/user.service"
import { IUser, IUserRole } from "@/shared/types/user.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import toast from "react-hot-toast"

export const useUpdateUser = () => {

    const queryClient = useQueryClient()

    const {mutate: updateUser, isPending: isLoadingUpdate} = useMutation({
        mutationKey: ['update user'],
        mutationFn: (data:IUser) =>
            userService.updateUser(data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get users for dashboard']
            })

            toast.success('Данные обновление')
        },
        onError() {
            toast.error("Ошибка при обновлении")
        }
    })

    return useMemo(
        () => ({
            updateUser,
            isLoadingUpdate
        }),
        [updateUser, isLoadingUpdate]
    )
}