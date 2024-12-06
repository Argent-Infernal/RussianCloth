'use client'

import { DataTable } from "@/components/data-loading/DataTable"
import { IProductColumn, productColumns } from "./ProductColumns"
import styles from '../Admin.module.scss'
import DataTableLoading from "@/components/data-loading/DataTableLoading"
import { useGetProducts } from "@/hooks/queries/products/useGetProducts"
import Heading from "@/components/ui/Heading/Heading"
import { Button } from "@/components/ui/Button"
import { Plus } from "lucide-react"
import { useModal } from "@/Providers/Modal.provider"
import ProductFormModal from "@/components/modals/ProductForm.modal"

export default function Products() {

    const {products, isLoading} = useGetProducts()

    const { showModal } = useModal();

    const formattedProducts: IProductColumn[] = products ? products.map(product=>({
        id:product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        createdAt: product.createdAt,
        images: product.images
    })) : []

    const openProductModal = () => {
        showModal(
            <ProductFormModal/>
        );
    };

    return (
        <div className={styles.wrapper}>
            {isLoading ? (
                <DataTableLoading />
            ) : (
                <>
                    <Heading title={`Товаров (${products?.length})`} description='Все товары' >
                        <Button variant='default' onClick={openProductModal}>
                            <Plus></Plus>
                            Создать
                        </Button>
                    </Heading>

                    <div className={styles.table}>
                        <DataTable columns={productColumns} data={formattedProducts} filterKey="title"></DataTable>
                    </div>
                </>
            )}
        </div>
    )
}