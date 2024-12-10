// components/RoleModal.tsx
"use client"

import { Button } from "@/components/ui/Button";
import ButtonSelect from '../ui/ButtonSelect';
import { useState } from "react";
import { Loader } from "../ui/Loader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { EnumOrderStatus, IOrderStatus } from "@/shared/types/order.interface";
import { useUpdateOrderStatus } from "@/hooks/queries/orders/useUpdateStatus";

const selectTableValues = [
    {
        value: EnumOrderStatus.PENDING,
        label: "Оплата",
    },
    {
        value: EnumOrderStatus.PAYED,
        label: "Оплачено",
    },
    {
        value: EnumOrderStatus.SENT,
        label: "Отправлено до получателя",
    },
    {
        value: EnumOrderStatus.CANCELLED,
        label: "Отменено",
    },
    {
        value: EnumOrderStatus.ACCEPTED,
        label: "Принят в обработку",
    },
    {
        value: EnumOrderStatus.DONE,
        label: 'Выполнен'
    }
]

interface UserRoleModalProps {
    orderId: string,
}

const OrderStatusModal: React.FC<UserRoleModalProps> = ({orderId}) => {
    const [value, setValue] = useState<string>('')

    const {updateStatus, isLoading} = useUpdateOrderStatus()

    const handleSubmit = () => {

        const data: IOrderStatus = {
            id: orderId,
            status: value 
        }
        console.log(data)
        updateStatus(data)
    };

    return (
        <div>
            <Card>
                <CardHeader className="items-center text-center">
                    <CardTitle>Изменить статус</CardTitle>
                </CardHeader>
                <CardContent className="items-center">
                    <ButtonSelect className='mb-4 w-full justify-between' value={value} setValue={setValue} selectTableValues={selectTableValues} ></ButtonSelect>
                </CardContent>
                <CardFooter className="items-center">
                    {isLoading ? (
                        <Loader/>
                    ) : (
                        <Button className="w-full" onClick={handleSubmit}>Сохранить</Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
};

export default OrderStatusModal;