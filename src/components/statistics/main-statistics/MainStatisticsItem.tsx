import { IMainStatistics } from "@/shared/types/statistics.interface"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"
import CountUp from 'react-countup'
import { formattedPrice } from "@/utils/formattedPrice"

interface MainStatisticsItemProps {
    item: IMainStatistics
}

export function MainStatisticsItem({item}: MainStatisticsItemProps) {
    return (
        <Card className="drop-shadow-sm">
            <CardHeader className="p-4 flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-2">
                <h2 className="text-2xl font-bold">
                    {item.id !== 1 ? (
                        <CountUp end={item.value}/>
                    ) : (
                        <CountUp end={item.value} formattingFn={formattedPrice}/>
                    )}
                </h2>
            </CardContent>
        </Card>
    )
}