import MainLayout from "@/components/Layouts/main-layout/MainLayout";
import type { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren<unknown>){
    return <MainLayout>{children}</MainLayout>
}