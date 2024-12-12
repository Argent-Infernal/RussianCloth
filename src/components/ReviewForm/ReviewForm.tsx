'use client';

import { IReviewInput } from "@/shared/types/review.interface";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Textarea } from "../ui/textarea";
import { useCreateReview } from "@/hooks/queries/reviews/useCreateReview";
import { Button } from "../ui/Button";
import StarRating from "../ui/StarRating/StarRating";

interface ReviewFormProps {
    reviewLinkId?: string;
}

export function ReviewForm({ reviewLinkId }: ReviewFormProps) {
    const { createReview, isLoadingCreate } = useCreateReview();

    const form = useForm<IReviewInput>({
        mode: 'onChange',
        defaultValues: {
            text: '',
            rating: 0
        }
    });

    const handleSubmit: SubmitHandler<IReviewInput> = data => {
        if (reviewLinkId)
            createReview(data);
    };

    return (
        <div className="mt-10 grid">
            <div className="flex flex-col items-center justify-center">
                <Card>
                    <CardHeader className="items-center text-center">
                        <CardTitle>Создание отзыва</CardTitle>
                    </CardHeader>

                    <CardContent className="items-center">
                        <FormProvider {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)}>
                                <FormField
                                    control={form.control}
                                    name='text'
                                    rules={{
                                        required: 'Отзыв обязателен'
                                    }}
                                    render={({ field }) => (
                                        <FormItem className="w-full flex flex-col items-center">
                                            <FormLabel>Отзыв</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Отзыв"
                                                    disabled={isLoadingCreate}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='rating'
                                    rules={{
                                        required: 'Оценка обязательна'
                                    }}
                                    render={({ field }) => (
                                        <FormItem className="mt-4 w-full flex flex-col items-center">
                                            <FormLabel>Оценка</FormLabel>
                                            <FormControl>
                                                <StarRating 
                                                    value={field.value} 
                                                    onChange={(value)=> form.setValue('rating', value)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="mt-4 w-full" variant='default' disabled={isLoadingCreate}>
                                    Отправить
                                </Button>
                            </form>
                        </FormProvider>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}