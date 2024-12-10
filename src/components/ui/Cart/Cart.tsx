import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart } from '@/store/store';
import { RootState } from '@/store/store';
import { IProduct } from '@/shared/types/product.interface';
import { formattedPrice } from '@/utils/formattedPrice';
import styles from './Cart.module.scss';
import { Button } from '../Button';
import Image from 'next/image';
import Title from '../Title/Title';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config';
import Link from 'next/link';

const CartComponent: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemove = (item: IProduct) => {
        dispatch(removeFromCart(item));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity ? item.quantity : 1), 0);

    return (
        <Card className={styles.mainBlock}>
            <CardHeader>
                <Title title='Корзина' />
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
                                    <span>{item.title}</span>
                                    <span className='ml-5'>{formattedPrice(item.price)}</span>
                                    <span className='ml-5'>Количество: {item.quantity}</span>
                                </div>
                                <div>
                                    <Button variant='ghost' onClick={() => dispatch(removeFromCart(item))}>-</Button>
                                    <Button variant='ghost' onClick={() => dispatch(addToCart(item))}>+</Button>
                                    {/* <Button variant='destructive' onClick={() => handleRemove(item)}>Удалить</Button> */}
                                </div>
                            </div>
                        ))}
                    </ul>
                )}
            </CardContent>

            <CardFooter className={styles.footer}>
                {cartItems.length > 0 && (
                    <>
                        <p>Общая стоимость товаров: {formattedPrice(totalPrice)}</p>
                            <div className={styles.footerButtons}>
                            <Button variant='outline' onClick={handleClear}>Очистить корзину</Button>
                            <Link href={DASHBOARD_URL.order()}><Button>Перейти к оформлению</Button> </Link>
                        </div>
                    </>
                )}
            </CardFooter>
        </Card>
    );
};

export default CartComponent;