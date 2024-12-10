'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"
import { validEmail } from "@/shared/types/regex"
import { ImageUpload } from "@/components/image-upload/ImageUpload"
import { IUser } from "@/shared/types/user.interface"

interface DashboardFieldsProps {
    form: UseFormReturn<IUser, any, undefined>
    isPending: boolean
    className?: string
}

export function DashboardFields({form, isPending, className}: DashboardFieldsProps) {

    return (
        <div className={className}>

            <div className="flex flex-row items-center">
                <div className="flex-none w-1/4 ">
                    <FormField
                        control={form.control}
                        name='picture'
                        render={({field}) => (
                            <FormItem className="mt-4">
                                <FormLabel>Аватар</FormLabel>
                                <FormControl>
                                    <ImageUpload
                                        multiple={false} 
                                        value={Array.isArray(field.value) ? field.value : field.value ? [field.value] : []}
                                        isDisabled={isPending}
                                        folder='users'
                                        onChange={(files) => {
                                            const fileArray = files.length > 0 ? [files[0]] : [];
                                            field.onChange(fileArray);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex-grow ml-4r">
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
                            <FormItem className="mt-4">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='example@example.com'
                                        type="email"
                                        disabled={true}
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
                        name='phone'
                        rules={{ required: 'Телефон обязателен' }}
                        render={({ field }) => (
                            <FormItem className="mt-4">
                                <FormLabel>Номер телефона</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Введите ваш телефон'
                                        type="tel"
                                        disabled={isPending}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='fullname'
                        rules={{ required: 'ФИО обязательно' }}
                        render={({ field }) => (
                            <FormItem className="mt-4">
                                <FormLabel>ФИО</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Введите ваше ФИО'
                                        type="text"
                                        disabled={isPending}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>
            </div>


            <FormField
                control={form.control}
                name='country'
                rules={{ required: 'Страна обязательна' }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Страна</FormLabel>
                        <FormControl>
                            <Input
                                placeholder='Введите вашу страну'
                                type="text"
                                disabled={isPending}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name='address'
                rules={{ required: 'Адрес обязателен' }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Адрес</FormLabel>
                        <FormControl>
                            <Input
                                placeholder='Введите ваш адрес'
                                type="text"
                                disabled={isPending}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name='postalCode'
                rules={{ required: 'Почтовый индекс обязателен' }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Почтовый индекс</FormLabel>
                        <FormControl>
                            <Input
                                placeholder='Введите почтовый индекс'
                                type="text"
                                disabled={isPending}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

        </div>
    )
}