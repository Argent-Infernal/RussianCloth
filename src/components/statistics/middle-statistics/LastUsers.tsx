import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ILastUsers } from "@/shared/types/statistics.interface";
import { formattedPrice } from "@/utils/formattedPrice";
import Image from "next/image";

interface LastUsersProps {
    data: ILastUsers[]
}

export function LastUsers({data}:LastUsersProps) {
    console.log(data)
    return (
        <Card className="col-span-1 lg:col-span-3">
            <CardHeader>
                <CardTitle>Последние покупатели</CardTitle>
            </CardHeader>
            <CardContent>
                {data.length ? (
                    data.map(user => (
                        <div key={user.id}className="flex items-center">
                            <Image className='rounded-full' src={user.picture} alt={user.email} width={40} height={40}/>
                            <div className="ml-4 space-y-1 text-sm">
                                <p className="leading-none font-medium ">{user.name}</p>
                                <p className="leading-none font-medium text-muted-foreground ">{user.email}</p>
                            </div>
                            <div className="ml-auto font-medium">
                                +{formattedPrice(user.total)}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        Нету покупателей
                    </div>
                )}
            </CardContent>
        </Card>
    )
}