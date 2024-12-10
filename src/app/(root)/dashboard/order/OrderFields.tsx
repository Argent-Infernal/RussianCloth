'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"
import { EnumShopMethods, shippingPrices } from "@/shared/types/order.interface"
import { IOrder } from "@/shared/types/order.interface"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Radio } from "lucide-react"
import { Label } from "@/components/ui/Label"
import { formattedPrice } from "@/utils/formattedPrice"

interface OrderFieldsProps {
    form: UseFormReturn<IOrder, any, undefined>
    isPending: boolean
    className?: string
}

export function OrderFields({form, isPending, className}: OrderFieldsProps) {

    return (
        <div className={className}>
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

            <FormField
                control={form.control}
                name='shopmethod'
                rules={{ required: 'Способ доставки обязателен' }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Способ доставки</FormLabel>
                        <FormControl>
                            <RadioGroup 
                                value={field.value} 
                                onValueChange={field.onChange} 
                                disabled={isPending}
                            >
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={EnumShopMethods.CDEK} id={EnumShopMethods.CDEK} />
                                        <Label htmlFor={EnumShopMethods.CDEK}>Сдэк {formattedPrice(shippingPrices[EnumShopMethods.CDEK])}</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={EnumShopMethods.RUSSIAMAIL} id={EnumShopMethods.RUSSIAMAIL} />
                                        <Label htmlFor={EnumShopMethods.RUSSIAMAIL}>Почта россии {formattedPrice(shippingPrices[EnumShopMethods.RUSSIAMAIL])}</Label>
                                    </div>
                                </div>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

        </div>
    )
}