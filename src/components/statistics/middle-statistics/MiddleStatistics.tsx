import { useGetStatistics } from "@/hooks/queries/statistics/useGetStatistics";
import { Overview } from "./Overview";
import { LastUsers } from "./LastUsers";

export function MiddleStatistics() {
    const {middle} = useGetStatistics()

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grod-cols-7 mt-6">
            {middle?.monthlySales.length || middle?.lastUsers.length ? (
                <>
                    <div className="">
                        <Overview data={middle.monthlySales}/>
                    </div>
                    <div>
                        <LastUsers data={middle.lastUsers}/>
                    </div>
                </>
            ) : (
                <div>Нет данных для статистики</div>
            )}
        </div>
    )
}