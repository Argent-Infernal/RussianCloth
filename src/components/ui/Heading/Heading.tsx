import { PropsWithChildren, ReactNode } from 'react'
import styles from './Heading.module.scss'

interface HeadingProps {
    title: string,
    description: string,
    children?: ReactNode
}

export default function Heading({title,description,children}:HeadingProps){
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <h1>{description}</h1>
            {children}
        </div>
    )
}