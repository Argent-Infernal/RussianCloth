'use client'

import { ReviewForm } from "@/components/ReviewForm/ReviewForm";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export function Review() {

    const {reviewLinkId} = useParams()

    const validReviewLinkId = typeof reviewLinkId === 'string' ? reviewLinkId : undefined;

    return (
        <div>
            <ReviewForm reviewLinkId={validReviewLinkId}/>
        </div>
    )
}