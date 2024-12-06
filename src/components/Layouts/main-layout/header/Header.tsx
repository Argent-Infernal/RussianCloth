'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import { Button } from '@/components/ui/Button'
import HeaderUser from './HeaderUser'
import { PUBLIC_URL } from '@/config/url.config'
import ThemeButton from '@/components/ui/ThemeButton'
import { useScroll } from '@/Providers/ScrollProvider'

export default function Header() {
    const { scrollToSection } = useScroll();

    return (
        <div className={styles.header}>
            <Link href={PUBLIC_URL.home()}>
                <strong>RussianCloth.ru</strong>
            </Link>
            <div className={styles.navigation}>
                <Link href={PUBLIC_URL.home()}><Button variant='header' onClick={()=>scrollToSection('welcomeSection')}>Главная</Button></Link>
                <Link href={PUBLIC_URL.home()}><Button variant='header' onClick={()=>scrollToSection('productsSection')}>Одежда и аксессуары</Button></Link>
                <Link href={PUBLIC_URL.home()}><Button variant='header' onClick={()=>scrollToSection('reviewsSection')}>Отзывы</Button></Link>
                <Link href={PUBLIC_URL.home()}><Button variant='header' onClick={()=>scrollToSection('questionsSection')}>Часто задаваемые вопросы</Button></Link>
            </div>

            <div className={styles.userNavigation}>
                <HeaderUser></HeaderUser>
                <ThemeButton></ThemeButton>
            </div>
        </div>
    )
}