'use client'

import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "./Button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command"
import { cn } from "@/utils/clsx"
import { Dispatch, SetStateAction, useState } from "react"

interface ButtonSelectTableValues {
    value: string;
    label: string;
}

interface ButtonSelectProps {
    className: string,
    selectTableValues: ButtonSelectTableValues[],
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export default function ButtonSelect({className, selectTableValues, value, setValue} : ButtonSelectProps) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>

                <Button
                    className={className}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                >
                    {value ? selectTableValues.find((tableValue) => tableValue.value === value)?.label : "Выберите..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>

            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">

                <Command>

                <CommandInput placeholder="Поиск..." />

                <CommandList>
                    <CommandEmpty>Ничего не найдено.</CommandEmpty>
                    <CommandGroup>
                        {selectTableValues.map((tableValue) => (
                            <CommandItem
                            key={tableValue.value}
                            value={tableValue.value}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                            }}
                            >
                            <Check
                                className={cn(
                                "mr-2 h-4 w-4",
                                value === tableValue.value ? "opacity-100" : "opacity-0"
                                )}
                            />
                                {tableValue.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>

                </Command>

            </PopoverContent>
        </Popover>
    )
}