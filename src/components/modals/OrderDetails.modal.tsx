"use client"

import { useGetOrder } from "@/hooks/queries/orders/useGetOrder";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { IOrderColumn } from "@/app/admin/orders/OrdersColumns";
import Title from "../ui/Title/Title";
import { Label } from "../ui/Label";
import { Input } from "../ui/input";
import { formattedPrice } from "@/utils/formattedPrice";
import { ItemsList } from "../ui/ItemList/ItemList";
import { IOrder, IOrderItemWithProduct } from "@/shared/types/order.interface";
import { useGetProducts } from "@/hooks/queries/products/useGetProducts";
import { formattedStatus } from "@/utils/formattedStatus";

interface OrderDetailsModalProps {
    orderColumn: IOrderColumn | IOrder
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({orderColumn}) => {

    const {order, isLoading} = useGetOrder(orderColumn.id)
    const {products} = useGetProducts()

    const enrichedOrderItems: IOrderItemWithProduct[] = (order?.items ?? []).map(item => {
        const product = products?.find(product => product.id === item.productId);
        return {
            ...item,
            product: product
        };
    });
    
    return (
        <div>
            <Card className="w-[800px] shadow-lg">
                <CardHeader>
                    <Title title="Детали заказа"/>
                </CardHeader>
                <CardContent>
                    {order && (
                        <div className="flex flex-row justify-around gap-5">
                            <div className="grid w-full max-w-sm items-center gap-1.5 mr-5">
                                <Label>Email</Label>
                                <Input type="email" disabled defaultValue={order.user.email} />

                                <Label>ФИО</Label>
                                <Input type="text" disabled defaultValue={order.fullname} />

                                <Label>Страна</Label>
                                <Input type="text" disabled defaultValue={order.country} />

                                <Label>Адрес</Label>
                                <Input type="text" disabled defaultValue={order.address} />

                                <Label>Номер телефона</Label>
                                <Input type="text" disabled defaultValue={order.phone} />

                                <Label>Почтовый индекс</Label>
                                <Input type="text" disabled defaultValue={order.postalCode} />

                                <Label>Способ доставки</Label>
                                <Input type="text" disabled defaultValue={order.shopmethod} />
                            </div>

                            <div className="flex flex-col w-full gap-5">
                                <Label>Статус: {order.status !== undefined ? formattedStatus(order.status) : 'Статус не указан'}</Label>
                                <Label>Цена заказа: {formattedPrice(order.total)}</Label>
                                <Label>Дата создания: {new Date(order.createdAt).toDateString()}</Label>

                                <Label>Список товаров:</Label>

                                <ItemsList items = {enrichedOrderItems}/>
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>
    )
};

export default OrderDetailsModal;