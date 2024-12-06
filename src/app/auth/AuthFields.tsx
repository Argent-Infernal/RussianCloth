'use client'

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/Form"
import { IAuthForm } from "@/shared/types/auth.interface"
import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"
import { validEmail } from "@/shared/types/regex"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react"
import { useTheme } from "@/Providers/Theme.provider"

interface AuthFieldsProps {
    form: UseFormReturn<IAuthForm, any, undefined>
    isPending: boolean
    isReg?: boolean
    className?: string
}

export function AuthFields({form, isPending, isReg=false, className}: AuthFieldsProps) {

    const [isShowPassword, setIsShowPassword] = useState(false)
    const { isDarkTheme } = useTheme();

    return (
        <div className={className}>
            <FormField
                control={form.control}
                name='email'
                defaultValue=''
                rules={{
                    required: 'Email обязателен',
                    pattern: {
                        value: validEmail,
                        message: 'Введите правильную почту'
                    }
                }}
                render={({field}) =>(
                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder='example@example.com'
                                type="email"
                                disabled={isPending}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            >
            </FormField>

            <FormField
                control={form.control}
                name='password'
                defaultValue=''
                rules={{
                    required: 'Пароль обязателен',
                    minLength: {
                        value: 8,
                        message: 'Минимальный размер пароля 8'
                    }
                }}
                render={({field}) =>(
                    <FormItem>
                        <FormControl>
                            <div className="relative">
                                <Input
                                    placeholder='*****'
                                    type={isShowPassword ? 'text' : 'password'}
                                    disabled={isPending}
                                    {...field}
                                />

                                <button
                                    type="button"
                                    onClick={()=>setIsShowPassword(!isShowPassword)}
                                    className="absolute right-2 top-2"
                                >
                                    {isShowPassword ? (
                                    <Eye className={`w-5 h-5 text-black`} />
                                    ) : (
                                    <EyeOff className={`w-5 h-5 text-black`} />
                                    )}
                                </button>
                            </div>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            >
            </FormField>

        </div>
    )
}