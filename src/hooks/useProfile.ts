import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export function useProfile() {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userService.getProfile(),
        // Другие опции, если нужно
        retry: false
    });

    const user = isError ? null : data

    return { user, isLoading, refetch };
}