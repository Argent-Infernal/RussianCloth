import { PropsWithChildren } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from './MainLayout.module.scss'

export default function MainLayout({children}:PropsWithChildren<{}>) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.layout}>
                <Header></Header>
                <main>{children}</main>
                <Footer></Footer>
            </div>
        </div>
    )
}