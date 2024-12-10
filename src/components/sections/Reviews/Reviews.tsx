'use client'

import Title from '@/components/ui/Title/Title'
import styles from './Reviews.module.scss'

import { Card, CardContent } from "@/components/ui/Card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useScroll } from '@/Providers/ScrollProvider'

export default function Reviews() {
    const { sectionRefs } = useScroll();

    return  (
        <div ref={sectionRefs.reviewsSection} className={styles.mainBlock}>
            <Title className='mb-5' title='Отзывы'/>
            <div className={styles.reviews} >
                <p>Отзывов нет</p>
                {/* <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full max-w-sm"
                    >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> */}
            </div>
        </div>
    )
}