import { useGetStatistics } from "@/hooks/queries/statistics/useGetStatistics"
import { MainStatisticsItem } from "./MainStatisticsItem"

export function MainStatistics() {

    const {main} = useGetStatistics()

    return (
        <div className="mt-3 grid grid-cols-1 gap-4 gap-x-8 transition-all sm:frid-cols-2 xl:grid-cols-4">
            
            {main?.length ? (
                main.map((item,index) => (
                    <MainStatisticsItem key={item.id} item = {item}/>
                ))
            ) : (
                <div>Нету данных</div>
            )}
        </div>
    )
}