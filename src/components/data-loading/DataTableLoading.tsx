
import { FC } from 'react'
import styles from './DataTable.module.scss'
import { Skeleton } from '../ui/skeleton'
import { Card, CardContent } from '../ui/Card'
import { Loader } from '../ui/Loader'

const DataTableLoading: FC = () => {
    return (
        <div className={styles.loading}>
            <Skeleton className={styles.heading}></Skeleton>
            <Skeleton className={styles.search}></Skeleton>
            <Card className={styles.table}>
                <CardContent>
                    <div className={styles.loader_wrapper}>
                        <Loader/>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default DataTableLoading