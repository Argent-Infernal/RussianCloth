
import { FC } from 'react'
import styles from './Products.module.scss'

import { Loader } from '@/components/ui/Loader'
import { Skeleton } from '@/components/ui/skeleton'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import ProductCardSceleton from '@/components/ui/ProductCard/ProductCardSkeleton'

const ProductsLoading: FC = () => {
    return (
        <div className={styles.gridBlock}>
            <ProductCardSceleton/>
            <ProductCardSceleton/>
            <ProductCardSceleton/>
            <ProductCardSceleton/>
        </div>
    )
}

export default ProductsLoading