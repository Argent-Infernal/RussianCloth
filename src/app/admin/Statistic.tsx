'use client'

import styles from './Admin.module.scss'
import { MainStatistics } from '@/components/statistics/main-statistics/MainStatistics'
import { MiddleStatistics } from '@/components/statistics/middle-statistics/MiddleStatistics'
import Heading from '@/components/ui/Heading/Heading'

export default function Statistic() {
    return (
        <div className={styles.wrapper}>
            <Heading title={`Статистика`} description='' />
            <MainStatistics/>
            <MiddleStatistics/>
        </div>
    )
}