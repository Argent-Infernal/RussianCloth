'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ADMIN_URL, DASHBOARD_URL, PUBLIC_URL } from "@/config/url.config"
import { useProfile } from "@/hooks/queries/users/useProfile"
import { authService } from "@/services/auth/auth.service"
import { useMutation } from "@tanstack/react-query"
import { Loader, LoaderCircle, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import toast from "react-hot-toast"

interface HeaderUserProps {
    className?: string;
}

export default function HeaderUser({className}: HeaderUserProps) {
    const {user, isLoading, refetch} = useProfile()

    const router = useRouter()
    const currentPath = usePathname();

    const {mutate: logOut} = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            toast.success('Вы успешно вышли с аккаунта!')
            refetch()
            router.push(PUBLIC_URL.home())
        }
    })

    return (
        <div className={className}>
            {isLoading ? (
                <LoaderCircle className="animate-spin text-muted-foreground"></LoaderCircle>
            ) : (
                user ? (
                    <>

                        <DropdownMenu>

                            <DropdownMenuTrigger className="outline-none">
                                <Avatar>
                                    <AvatarImage src={user.picture} alt={user.email} />
                                    <AvatarFallback>{user.email}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                {!currentPath.startsWith('/admin') ? (
                                    <>
                                         <DropdownMenuItem asChild>
                                            <Link href={DASHBOARD_URL.home()}>Личный кабинет</Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild>
                                            <Link href={DASHBOARD_URL.cart()}>Корзина</Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild>
                                            <Link href={DASHBOARD_URL.orders()}>Заказы</Link>
                                        </DropdownMenuItem>

                                        {user.role === 'admin' && (
                                            <DropdownMenuItem asChild>
                                                <Link href={ADMIN_URL.home()}>Админ панель</Link>
                                            </DropdownMenuItem>
                                        )}
                                    </>
                                ) : (
                                    <DropdownMenuItem asChild>
                                        <Link href={PUBLIC_URL.home()}>Перейти на главную</Link>
                                    </DropdownMenuItem>
                                )}

                                <DropdownMenuItem onClick={() => logOut()}>
                                    Выйти с аккаунта
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>




                        {/* <Avatar>
                            <AvatarImage src={user.picture} alt={user.email} width={40} height={40} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Button variant='outline' onClick={()=>logOut()}>
                            <LogOut></LogOut>
                            Выйти с аккаунта
                        </Button> */}
                    </>
                    
                ) : (
                    <Link href={PUBLIC_URL.auth()}>
                        <Button variant='outline'>
                            <LogOut></LogOut>
                            Войти
                        </Button>
                    </Link>
                )
            )
            }
        </div>
    )
}