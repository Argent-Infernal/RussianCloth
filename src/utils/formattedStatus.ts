import { enumsStatus } from "@/shared/types/order.interface";

export function formattedStatus(status: string): string {
    return enumsStatus[status as keyof typeof enumsStatus]
}