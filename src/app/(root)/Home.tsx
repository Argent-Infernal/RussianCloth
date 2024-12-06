import Products from "@/components/sections/Products/Products"
import Questions from "@/components/sections/Questions/Questions"
import Reviews from "@/components/sections/Reviews/Reviews"
import Welcome from "@/components/sections/Welcome/Welcome"

export default function Home() {
    return (
        <div>
            <Welcome/>
            <Products/>
            <Reviews/>
            <Questions/>
        </div>
    )
}