
"use client"

import { IProduct, IProductInput } from "@/shared/types/product.interface";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import ImagesGallery from "../ui/ImagesGallery/ImagesGallery";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { Button } from "../ui/Button";
import { formattedPrice } from "@/utils/formattedPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/store";
import toast from "react-hot-toast";

interface ProductFormModalProps {
    product: IProduct
}

const ProductModal: React.FC<ProductFormModalProps> = ({product}) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        toast.success('Вы добавили товар в корзину')
        dispatch(addToCart(product));
    };

   return (
        <div>
            <Card className="w-[800px] shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row justify-between">
                        <ImagesGallery className='flex w-full items-center justify-center' images={product.images as string[]} />
                        
                        <div className="flex flex-col w-full pl-4">
                            <h1 className="text-lg font-semibold">Описание:</h1>
                            <p className="border-2 rounded p-2 shadow-sm">{product.description}</p>
                            <div className="mt-4">
                                <h2 className="text-xl font-bold text-blue-600">Цена: {formattedPrice(product.price)}</h2>
                            </div>
                            <Button onClick={handleAddToCart} 
                                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                            >
                                В корзину
                            </Button >
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    {/* Дополнительные элементы подвала, если необходимо */}
                </CardFooter>
            </Card>
        </div>
    )
};

export default ProductModal;