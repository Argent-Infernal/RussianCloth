'use client'

import { IProduct } from '@/shared/types/product.interface'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { formattedPrice } from '@/utils/formattedPrice'
import { useModal } from '@/Providers/Modal.provider'
import ProductModal from '@/components/modals/Product.modal'

interface ProductCardProps {
    product: IProduct
}

export default function ProductCard({product}: ProductCardProps) {

    const { showModal } = useModal();

    const openModal = () => {
        showModal(
            <ProductModal
                product={product}
            />
        );
    };

    return (
        <div className={styles.card}>
            <button onClick={openModal}>
                <Image 
                    src={product.images[0]} 
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className={styles.image}
                    />
                <h3 className={styles.title}>{formattedPrice(product.price)}</h3>
            </button>
        </div>
    )
}