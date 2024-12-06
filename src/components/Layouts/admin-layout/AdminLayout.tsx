import { PropsWithChildren } from "react";
import styles from './AdminLayout.module.scss'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSideBar from "./sidebar/AdminSideBar";

export default function AdminLayout({children}:PropsWithChildren<{}>) {
    return (
        <div>
            <SidebarProvider>
                <AdminSideBar />
                <div className={styles.layout}>
                    <main>
                        <SidebarTrigger />
                        
                        {children}
                    </main>
                </div>
            </SidebarProvider>
        </div>
    )
}