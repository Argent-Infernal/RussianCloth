// components/RoleModal.tsx
"use client"

import { Button } from "@/components/ui/Button";
import { IProduct, IProductInput } from "@/shared/types/product.interface";
import { useCreateProduct } from "@/hooks/queries/products/useCreateProducts";
import { useUpdateProduct } from "@/hooks/queries/products/useUpdateProduct";
import { useDeleteProduct } from "@/hooks/queries/products/useDeleteProduct";
import { Form, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import Heading from "../ui/Heading/Heading";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ImageUpload } from "../image-upload/ImageUpload";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";

interface ProductFormModalProps {
    product?: IProduct
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({product}) => {

    const {createProduct, isLoadingCreate} = useCreateProduct()
    const {updateProduct, isLoadingUpdate} = useUpdateProduct(product ? product.id : '')
    const {deleteProduct, isLoadingDelete} = useDeleteProduct(product ? product.id : '')

    const title = product ? 'Изменить данные' : 'Создать товар'
    const description = product ? 'Изменить данные о товаре' : 'Добавить новый товар в магазин'
    const action = product ? 'Сохранить' : 'Создать'

    const form = useForm<IProductInput>({
        mode: 'onChange',
        defaultValues: {
            title: product?.title || '',
            description: product?.description || '',
            price: product?.price || 0,
            images: product?.images || [],
        }
    })

    const handleSubmit:SubmitHandler<IProductInput> = data => {
        data.price = Number(data.price)
        console.log('da')
        if (product) updateProduct(data)
        else createProduct(data)
    };

    return (

        <div>
            <Card>
                <CardHeader className="items-center text-center">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    {product && (
                        <Button
                            size = 'icon'
                            variant='default'
                            disabled = {isLoadingDelete}
                            onClick={()=>deleteProduct(product)}
                        >
                            <Trash className="size-4" />
                        </Button>
                    )}
                </CardHeader>
                <CardContent className="items-center">
                        <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>

                            <div className="flex gap-5 justify-between">
                                <FormField
                                    control={form.control}
                                    name='title'
                                    rules={{
                                        required: 'Название обязательно'
                                    }}
                                    render={({field}) => (
                                        <FormItem className="mt-4 w-full">
                                            <FormLabel>Название</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Название товара"
                                                    disabled={isLoadingCreate || isLoadingUpdate}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='price'
                                    rules={{
                                        required: 'Цена обязательно'
                                    }}
                                    render={({field}) => (
                                        <FormItem className="mt-4 w-full">
                                            <FormLabel>Цена</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Цена товара"
                                                    disabled={isLoadingCreate || isLoadingUpdate}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name='description'
                                rules={{
                                    required: 'Описание обязательно'
                                }}
                                render={({field}) => (
                                    <FormItem className="mt-4">
                                        <FormLabel>Описание</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Описание товара"
                                                disabled={isLoadingCreate || isLoadingUpdate}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='images'
                                rules={{
                                    required: 'Загрузите хотя бы одно изображение'
                                }}
                                render={({field}) => (
                                    <FormItem className="mt-4">
                                        <FormLabel>Изображения</FormLabel>
                                        <FormControl>
                                            <ImageUpload 
                                                isDisabled={isLoadingCreate || isLoadingUpdate}
                                                onChange={field.onChange}
                                                value={field.value}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button className="mt-4" variant='default'  disabled={isLoadingCreate || isLoadingUpdate}>{action}</Button>
                        </form>
                    </FormProvider>
                </CardContent>
                <CardFooter className="items-center">
                    
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductFormModal;