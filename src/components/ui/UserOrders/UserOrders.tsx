'use client'

import styles from './UserOrders.module.scss'
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import Title from '../Title/Title';
import { useGetOrders } from '@/hooks/queries/orders/useGetOrders';
import { formattedPrice } from '@/utils/formattedPrice';
import { Button } from '../Button';
import { EnumOrderStatus, enumsStatus } from '@/shared/types/order.interface';
import { useModal } from '@/Providers/Modal.provider';
import OrderDetailsModal from '@/components/modals/OrderDetails.modal';
import { formattedStatus } from '@/utils/formattedStatus';

export function UserOrders() {

    const {orders, isLoading} = useGetOrders()

    const { showModal } = useModal();
    
    return (
        <div>
            <Card className={styles.mainBlock}>
                <CardHeader>
                    <Title title='Список ваших заказов' />
                </CardHeader>
                <CardContent>
                    {orders?.length === 0 ? (
                        <p>У вас не было заказов</p>
                    ) : (
                        <ul className={styles.orders}>
                            {orders?.map((order) => (
                            <div className={styles.cart} key={order.id}>
                                <span>{new Date(order.createdAt).toDateString()}</span>
                                <span className='ml-5'>{formattedPrice(order.total)}</span>
                                <span className='ml-5'>{order.status !== undefined ? formattedStatus(order.status) : 'Статус не указан'}</span>
                                <Button variant='outline' onClick={
                                    () => {
                                        showModal(
                                            <OrderDetailsModal
                                                orderColumn={order}
                                            />
                                        );
                                    }
                                }>Открыть детали</Button>
                            </div>
                        ))}
                        </ul>
                    )}
                </CardContent>

                <CardFooter>
                    
                </CardFooter>
            </Card>
        </div>
    )
}