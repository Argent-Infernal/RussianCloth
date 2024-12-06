import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footer}>
                RussianCloth.ru &copy; 2024 Все права защищены
            </div>
        </div>
    )
}