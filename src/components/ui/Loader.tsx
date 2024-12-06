import { cn } from "@/utils/clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";


const iconVariants = cva('animate-spin text-muted-foreground', {
    variants: {
        size: {
            default: 'size-2',
            sm: 'size-1'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})

type TypeIconVariants = VariantProps<typeof iconVariants>

export const Loader = ({size}: TypeIconVariants) => {
    return <LoaderCircle className={cn(iconVariants({size}))} />
}