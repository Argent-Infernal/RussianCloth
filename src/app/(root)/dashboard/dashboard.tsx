'use client'

import { saveTokenStorage } from "@/services/auth/auth-token.service"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'

import styles from './Dashboard.module.scss'
import Title from "@/components/ui/Title/Title"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { DashboardFields } from "./DashboardFields"
import { Button } from "@/components/ui/Button"
import { IUser } from "@/shared/types/user.interface"
import { useProfile } from "@/hooks/queries/users/useProfile"
import { useUpdateUser } from "@/hooks/queries/users/useUpdate"
import { Skeleton } from "@/components/ui/skeleton"

export function Dashboard() {

    const {user, isLoading, refetch} = useProfile()
    const {updateUser, isLoadingUpdate} = useUpdateUser()

    const searchParams = useSearchParams()

    useEffect(()=>{
        const accessToken = searchParams.get('accessToken')

        if (accessToken) {
            saveTokenStorage(accessToken)
        }
    }, [searchParams])

    const form = useForm<IUser>({
        mode: 'onChange',
        defaultValues: {
            picture: user?.picture || '',
            email: user?.email || '',
            address: user?.address || '',
            fullname: user?.fullname || '',
            country: user?.country || '',
            postalCode: user?.postalCode || '',
            phone: user?.phone || ''
        },
    })

    useEffect(() => {
        if (user) {
            form.reset({
                picture: user?.picture || '',
                email: user?.email || '',
                address: user?.address || '',
                fullname: user?.fullname || '',
                country: user?.country || '',
                postalCode: user?.postalCode || '',
                phone: user?.phone || ''
            });
        }
    }, [user, form]);

    const handleSubmit:SubmitHandler<IUser> = data => {
        updateUser(data);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.centerBlock}>
                <Card className={styles.card}>
                    <CardHeader className={styles.header}>
                        <CardTitle>
                            <Title title="Личный кабинет"/>
                        </CardTitle>
                    </CardHeader>

                    <CardContent className={styles.content}>
                        <FormProvider {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)}>
                                <DashboardFields className={styles.fields} form={form} isPending={isLoadingUpdate} />

                                <Button className={styles.buttonSubmit} disabled={isLoadingUpdate}>Сохранить</Button>
                            </form>
                        </FormProvider>
                    </CardContent>

                    <CardFooter className={styles.footer}>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}