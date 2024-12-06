import styles from './Title.module.scss'

interface TitleProps {
    className?: string
    title: string
}

export default function Title({className, title}: TitleProps) {
    return (
        <div className={className}>
            <h1 className={styles.title} >
                {title}
            </h1>
        </div>
    )
}