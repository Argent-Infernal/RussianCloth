'use client'

import ProductCard from '@/components/ui/ProductCard/ProductCard'
import styles from './Products.module.scss'
import { useGetProducts } from '@/hooks/queries/products/useGetProducts'
import ProductsLoading from './ProductsLoading'
import { IProduct } from '@/shared/types/product.interface'
import Title from '@/components/ui/Title/Title'
import { useScroll } from '@/Providers/ScrollProvider'

export default function Products() {

    const {products, isLoading} = useGetProducts()
    const { sectionRefs } = useScroll();

    const formattedProducts:IProduct[] = products ? products: []
    return (
        <div ref = {sectionRefs.productsSection} className={styles.mainBlock}>
            <Title className='mb-10' title='Одежда и аксессуары'/>
            {isLoading ? (
                <ProductsLoading/>
            )
            : (
                <div className={styles.gridBlock}>
                    
                    {formattedProducts.map((product) => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))}
                </div>
            )}
        </div>
    )
}