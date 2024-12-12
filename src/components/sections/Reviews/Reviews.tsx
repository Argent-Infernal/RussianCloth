'use client'

import Title from '@/components/ui/Title/Title'
import styles from './Reviews.module.scss'

import { Card, CardContent, CardHeader } from "@/components/ui/Card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useScroll } from '@/Providers/ScrollProvider'
import { useGetReviews } from '@/hooks/queries/reviews/useGetReviews'
import { Loader } from '@/components/ui/Loader'
import Image from 'next/image'
import StarRating from '@/components/ui/StarRating/StarRating'

export default function Reviews() {
    const { sectionRefs } = useScroll();

    const {reviews, isLoading} = useGetReviews();
    console.log(reviews)
    return  (
        <div ref={sectionRefs.reviewsSection} className={styles.mainBlock}>
            <Title className='mb-5' title='Отзывы'/>
            <div className={styles.reviews} >
                {isLoading ? (
                    <Loader/>
                ) : (
                    <>
                        {reviews && reviews.length ? (
                            <Carousel
                                opts={{
                                    align: "center",
                                }}
                                className="w-full"
                            >
                                <CarouselContent>

                                    {reviews.map((review, index) => (
                                        <CarouselItem key={index} className="flex max-w-[400px]">
                                            <div className="p-1">
                                            <Card>
                                                <CardHeader>
                                                    <StarRating value={review.rating} disabled onChange={()=>{}}/>
                                                    <div className="flex items-center">
                                                        <Image className='rounded-full' src={review.user.picture} alt={review.user.email} width={40} height={40}/>
                                                        <div className="ml-4 space-y-1 text-sm">
                                                            <p className="leading-none font-medium ">{review.user.fullname}</p>
                                                            <p className="leading-none font-medium text-muted-foreground ">{review.user.email}</p>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-muted-foreground">
                                                        <p>
                                                            {review.text}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                    
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            // reviews.map((review) => {
                                // <Card>
                                //     <CardHeader>
                                //         <div key={review.id} className="flex items-center">
                                //             <Image className='rounded-full' src={review.user.picture} alt={review.user.email} width={40} height={40}/>
                                //             <div className="ml-4 space-y-1 text-sm">
                                //                 <p className="leading-none font-medium ">{review.user.fullname}</p>
                                //                 <p className="leading-none font-medium text-muted-foreground ">{review.user.email}</p>
                                //             </div>
                                //         </div>
                                //     </CardHeader>
                                // </Card>
                            // })
                        ) : (
                            <div>
                                <p>Отзывов нет</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}