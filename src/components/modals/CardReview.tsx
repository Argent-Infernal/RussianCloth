import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { IReview } from "@/shared/types/review.interface";
import StarRating from "../ui/StarRating/StarRating";
import Image from "next/image";

interface CardReviewProps {
    review: IReview,
}

const CardReviewModal: React.FC<CardReviewProps> = ({review}) => {
    return (
        <Card className="max-w-[500px]">
            <CardHeader className="items-center text-center">
                <CardTitle>
                    <StarRating value={review.rating} disabled onChange={()=>{}}/>
                </CardTitle>
            </CardHeader>
            <CardContent className="items-center">
                <div className="flex flex-row items-center">
                    <Image className='rounded-full' src={review.user.picture} alt={review.user.email} width={40} height={40}/>
                    <div className="ml-4 space-y-1 text-sm">
                        <p className="leading-none font-medium ">{review.user.fullname}</p>
                        <p className="leading-none font-medium text-muted-foreground ">{review.user.email}</p>
                    </div>
                </div>

                <div className="text-muted-foreground mt-5 border rounded p-5">
                    <p>
                        {review.text}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="items-center">
            </CardFooter>
        </Card>
    );
};

export default CardReviewModal;