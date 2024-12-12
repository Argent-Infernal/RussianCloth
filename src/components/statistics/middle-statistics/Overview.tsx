import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { IMonthlySales } from "@/shared/types/statistics.interface"
import { formattedPrice } from "@/utils/formattedPrice"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const chartConfig = {
    value: {
        label: 'Прибыль',
    }
} satisfies ChartConfig

interface OverviewProps {
    data: IMonthlySales[]
}

export function Overview({data}:OverviewProps) {
    return (
        <Card className="col-span-1 lg:col-span-3 xl:col-span-4">
            <CardHeader>
                <CardTitle>Прибыль</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer className="aspect-auto h-[310px] w-full" config={chartConfig}>
                    <AreaChart 
                        accessibilityLayer
                        data={data} 
                        margin={{
                                left: 12, right: 12
                        }}
                    >
                        <CartesianGrid vertical={false}/>
                        <XAxis dataKey='date' tickLine={false} axisLine={false} tickMargin={8}/>
                        <ChartTooltip content={
                            <ChartTooltipContent indicator="line"/>
                        }/>
                        <Area dataKey='value' type='natural'/>
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}