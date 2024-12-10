'use client'

import { IUser } from "@/shared/types/user.interface"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import styles from './Order.module.scss'
import Title from "@/components/ui/Title/Title"
import { Button } from "@/components/ui/Button"
import { useProfile } from "@/hooks/queries/users/useProfile"
import { ItemsOrder } from "@/components/ui/ItemsOrder/ItemsOrder"
import { OrderFields } from "./OrderFields"
import { EnumShopMethods, IOrder, IOrderItem, shopMethodToNumberMap } from "@/shared/types/order.interface"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { useCheckout } from "@/hooks/queries/orders/useCheckout"

export function Order() {

    const {user, isLoading} = useProfile()
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const {createPayment, isLoadingCreate} = useCheckout();

    const orderItems: IOrderItem[] = cartItems.map(item => ({
        quantity: item.quantity ?? 0,
        price: item.price,
        productId: item.id
    })).filter(item => item.quantity > 0);

    const form = useForm<IOrder>({
        mode: 'onChange',
        defaultValues: {
            address: user?.address || '',
            fullname: user?.fullname || '',
            country: user?.country || '',
            postalCode: user?.postalCode || '',
            phone: user?.phone || '',
            shopmethod: EnumShopMethods.CDEK,
            items: orderItems
        },
    })

    const handleSubmit:SubmitHandler<IOrder> = data => {
        // const numericShopMethod = shopMethodToNumberMap[data.shopmethod as EnumShopMethods];
        
        // const orderData = {
        //     ...data,
        //     shopmethod: numericShopMethod
        // }

        createPayment(data)
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.centerBlock}>
                <Card className={styles.card}>
                    <CardHeader>
                        <CardTitle>
                            <Title title="Оформление заказа"/>
                        </CardTitle>
                    </CardHeader>

                    <CardContent className={styles.content}>
                        <div className={styles.leftBlock}>
                            <FormProvider {...form}>
                                <form onSubmit={form.handleSubmit(handleSubmit)}>
                                    <OrderFields className={styles.fields} form={form} isPending={isLoading}/>

                                    <Button className={styles.buttonSubmit} disabled={isLoading}>Перейти к оплате</Button>
                                </form>
                            </FormProvider>
                        </div>
                        <div className={styles.rightBlock}>
                            <ItemsOrder form={form}/>
                        </div>
                    </CardContent>

                    <CardFooter className={styles.footer}>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}