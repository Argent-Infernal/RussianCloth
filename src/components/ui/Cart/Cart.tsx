import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '@/store/store';
import { RootState } from '@/store/store';
import { IProduct } from '@/shared/types/product.interface';
import { formattedPrice } from '@/utils/formattedPrice';
import styles from './Cart.module.scss';
import { Button } from '../Button';
import Image from 'next/image';
import Title from '../Title/Title';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';

const CartComponent: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemove = (item: IProduct) => {
        dispatch(removeFromCart(item));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    return (
        <Card className={styles.mainBlock}>
            <CardHeader>
                <Title title='Корзина'/>
            </CardHeader>
            <CardContent className={styles.content}>
                {cartItems.length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
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
                                    <span >{item.title}</span>
                                    <span className='ml-5'>{formattedPrice(item.price)}</span>
                                </div>
                                <Button variant='destructive'onClick={() => handleRemove(item)}>Удалить</Button>
                            </div>
                        ))}
                    </ul>
                )}
            </CardContent>

            <CardFooter className={styles.footer}>
                <Button variant='outline' onClick={handleClear}>Очистить корзину</Button>
                <Button>Перейти к оформлению</Button>
            </CardFooter>

        </Card>

    );
};

export default CartComponent;