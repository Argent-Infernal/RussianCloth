import type { PropsWithChildren } from "react";
import AdminLayout from "@/components/Layouts/admin-layout/AdminLayout";

export default function Layout({children}: PropsWithChildren<unknown>){
    return (
        <AdminLayout>{children}</AdminLayout>
    )
}