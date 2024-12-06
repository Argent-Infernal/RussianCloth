'use client'

import { useScroll } from '@/Providers/ScrollProvider';
import styles from './Welcome.module.scss'

export default function Welcome() {
    const { sectionRefs } = useScroll();

    return (
        <div ref={sectionRefs.welcomeSection} className={styles.mainBlock}>
            <div className={styles.textBlock}>
                <h1>Лучший магазин мерча в <span>России</span>!</h1>
            </div>

            <p>Погрузитесь в мир уникального мерча с Российской символикой, который сочетает в себе богатое культурное наследие и современный стиль. Этот мерч идеально подходит как для настоящих патриотов, так и для тех, кто ценит эстетику и традиции России и её народов.</p>
        </div>
    )
}