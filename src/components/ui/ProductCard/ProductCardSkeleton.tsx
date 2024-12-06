import styles from './ProductCard.module.scss'
import { Skeleton } from '../skeleton'
import { Loader } from '../Loader'
export default function ProductCardSceleton() {
    return (
        <Skeleton className={styles.card}>
            <Loader/>
        </Skeleton>
    )
}