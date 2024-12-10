'use client'
import { useSelector } from 'react-redux';
import styles from './ItemsOrder.module.scss'
import { RootState } from '@/store/store';
import Image from 'next/image';
import { Button } from '../Button';
import { formattedPrice } from '@/utils/formattedPrice';
import { UseFormReturn } from 'react-hook-form';
import { IOrder, shippingPrices } from '@/shared/types/order.interface';

interface ItemsOrderProps {
    form: UseFormReturn<IOrder, any, undefined>
}

export function ItemsOrder({form}:ItemsOrderProps) {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity ? item.quantity : 1), 0);
    
    const shopMethodPrice = shippingPrices[form.getValues()['shopmethod']]

    return (
        <div className={styles.mainBlock}>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <div className={styles.cart} key={item.id}>
                                <Image
                                    src={item.images[0]}
                                    alt={item.title}
                                    width={70}
                                    height={70}
                                    className='rounded'
                                />
                                <div className={styles.itemDetails}>
                                    <span>{item.title}</span>
                                    <span className='ml-5'>{formattedPrice(item.price)}</span>
                                    <span className='ml-5'>Количество: {item.quantity}</span>
                                </div>
                            </div>
                        ))}
                    </ul>

                    <p>Общая стоимость товаров: {formattedPrice(totalPrice)} + {formattedPrice(shopMethodPrice)}</p>
                </>
                
            )}
        </div>
    )
}