
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

import { SelectFilterComponent} from "@/app/components/filter-zone";

export const FilterZoneSelectionComponent = () => {
    return (
        <section className="flex gap-3 items-end">
            <div className="flex flex-col">
                <label className="text-xs">Filtrado</label>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center gap-3 px-4 py-[0.5rem] border border-gray-300 rounded-lg min-w-min">
                            <Filter width={15} height={15} />
                            <span className="text-left">Filtros</span>
                            <span
                                className=" bg-blue-200 font-semibold text-blue-900 w-5 h-5 rounded-full text-xs text-center pt-[2.5px]"
                            >
                                3
                            </span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="ml-10">
                        <DropdownMenuLabel>Filtro</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem >
                            <SelectFilterComponent label="Mostrar por" buttonLabel="Limpiar" placeholder="Selecciona categoria"/>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <SelectFilterComponent label="Zonas" buttonLabel="Limpiar" placeholder="Zonas"/>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <SelectFilterComponent label="Modalidad de contrato" buttonLabel="Limpiar" placeholder="Modalidad de contrato"/>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="w-full">
                            <div className="flex flex-row justify-between w-full">
                                <Button variant="outline">Limpiar</Button>
                                <Button className="bg-[#5e79ff] hover:bg-blue-500">Aplicar filtro</Button>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <Input
                className="w-1/4"
                placeholder="Buscar"
            />
            <Select>
                <SelectTrigger className="w-1/4">
                    <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

            <Button variant="ghost" className="text-gray-500">Limpiar búsqueda</Button>
        </section>
    )
}
