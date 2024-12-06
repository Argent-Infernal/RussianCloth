'use client'

import styles from './Auth.module.scss'
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { useAuthForm } from "./useAuthForm"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Form } from '@/components/ui/Form'
import { AuthFields } from './AuthFields'
import { Social } from './Social'

export default function Auth(){
    const [isReg, setIsReg] = useState(false)

    const {onSubmit, form, isPending} = useAuthForm(isReg)

    return (
        <div className={styles.wrapper}>
            <div className={styles.centerBlock}>
                <Card className={styles.card}>
                    <CardHeader className={styles.header}>
                        <CardTitle>
                            {isReg ? 'Создать аккаунт' : 'Войти в аккаунт'}
                        </CardTitle>
                        <CardDescription>
                            Войдите в аккаунт для того, чтобы совершать покупки!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={styles.content}>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <AuthFields className={styles.fields} form={form} isPending={isPending} isReg={isReg} />

                                <Button className={styles.buttonSubmit} disabled={isPending}>Продолжить</Button>
                            </form>
                        </Form>

                        <Social></Social>
                    </CardContent>

                    <CardFooter className={styles.footer}>
                        {isReg ? 'Уже есть аккаунт?': 'Ещё нет аккаунта?'}
                        <button onClick={() => setIsReg(!isReg)}>
                            {isReg ? 'Войти' : 'Создать'}
                        </button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}