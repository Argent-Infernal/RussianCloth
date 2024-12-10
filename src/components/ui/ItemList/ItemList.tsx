'use client'
import { formattedPrice } from '@/utils/formattedPrice';
import { IOrderItem, IOrderItemWithProduct } from '@/shared/types/order.interface';

interface ItemsListProps {
    items: IOrderItemWithProduct[]
}

export function ItemsList({items}:ItemsListProps) {
    console.log(items)
    return (
        <div className='flex flex-col gap-5'>
            {items.length === 0 ? (
                <p>Нет товаров</p>
            ) : (
                <>
                    <ul>
                        {items.map((item, index) => (
                            <div key={index}>
                                <div className='flex border-b justify-between mb-5'>
                                    
                                    <span>{item.product?.title}</span>
                                    <span className='ml-5'>{formattedPrice(item.price)}</span>
                                    <span className='ml-5'>{item.quantity}</span>
                                </div>
                            </div>
                        ))}
                    </ul>
                </>
                
            )}
        </div>
    )
}