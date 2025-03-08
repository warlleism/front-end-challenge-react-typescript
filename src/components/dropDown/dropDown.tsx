import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"

export function DropdownMenuRadio({ values, title }: { values: string[], title: string }) {

    const [position, setPosition] = useState("bottom")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="justify-center bg-transparent border-[#808183] cursor-pointer ">
                    {title} <IoMdArrowDropdown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-md border p-2">
                <DropdownMenuLabel className="text-sm font-semibold">
                    {title}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1" />
                <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                    className="flex flex-col gap-1"
                >
                    {
                        values.map((value) => (
                            <DropdownMenuRadioItem
                                key={value}
                                value={value}
                                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm "
                            >
                                {value}
                            </DropdownMenuRadioItem>
                        ))
                    }
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

