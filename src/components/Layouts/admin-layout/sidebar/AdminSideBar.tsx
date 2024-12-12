import HeaderUser from "@/components/Layouts/main-layout/header/HeaderUser";
import { Sidebar, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import ThemeButton from "@/components/ui/ThemeButton";
import { ADMIN_URL, PUBLIC_URL } from "@/config/url.config";
import { Calendar, Home, Inbox, Search, Settings, Store, Users, WalletCards } from "lucide-react"
import Link from "next/link";
import style from './AdminSideBar.module.scss'

const items = [
    {
        title: "Главная",
        url: ADMIN_URL.home(),
        icon: Home,
    },
    {
        title: "Заказы",
        url: ADMIN_URL.orders(),
        icon: WalletCards,
    },
    {
        title: "Пользователи",
        url: ADMIN_URL.users(),
        icon: Users,
    },
    {
        title: "Товары",
        url: ADMIN_URL.products(),
        icon: Store,
    },
    {
        title: "Отзывы",
        url: ADMIN_URL.reviews(),
        icon: Settings,
    }
]

export default function AdminSideBar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className={style.SideBarHeader} >
                    <HeaderUser></HeaderUser>
                    <ThemeButton></ThemeButton>
                </div>
            </SidebarHeader>

            <SidebarGroup>
                <SidebarGroupLabel>Основное</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>

                            <SidebarMenuButton asChild>
                                <Link href={item.url}>

                                <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                            
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}