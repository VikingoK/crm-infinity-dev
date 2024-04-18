import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Fuel, LogOut, User, Users } from "lucide-react";

import { GroupUserIcon, HomeIcon, BellIcon, DotsIcon } from "@/assets/icons"
import { BellNotificationComponent } from './BellNotification';


export const NavbarComponent = () => {
    return (
        <header
            className="bg-white px-3 py-2 border-b border-gray-300"
        >
            <nav className="flex justify-between items-center">
                <section className="flex gap-4 items-center">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <HomeIcon width={45} height={45} />
                        <span className="text-blue-700 font-normal text-xl">CRM</span>
                    </div>

                    <Breadcrumb className="cursor-pointer">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Home</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>

                <section className="flex gap-3 items-center">
                    <div className="hidden md:flex gap-3">
                        <div className="flex items-center h-10 px-3 gap-3 border border-gray-300 rounded-lg cursor-pointer">
                            <GroupUserIcon />
                            <span>Consolidado</span>
                            <span className="bg-rose-600 w-5 h-5 rounded-full text-xs text-center text-white pt-[2.5px]">3</span>
                        </div>
                        <BellNotificationComponent />
                    </div>

                    <span className="border-r border-gray-300 h-10 ml-2"></span>

                    <div className="flex items-center">

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex gap-4 items-center p-3 px-2 cursor-pointer">
                                    <DotsIcon width={20} height={20} />

                                    <div className="flex gap-3">
                                        <div className="flex flex-col justify-end">
                                            <span>Carlota Marquez</span>
                                            <span className="text-xs text-right">Administradora</span>
                                        </div>

                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>

                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 mr-5 mt-2">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <User className="mr-4 h-4 w-4" />
                                        <span>Ver perfil</span>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Users className="mr-4 h-4 w-4" />
                                        <span>Aliados</span>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Fuel className="mr-4 h-4 w-4" />
                                        <span>PDS</span>
                                    </DropdownMenuItem>

                                </DropdownMenuGroup>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <LogOut className="mr-4 h-4 w-4 text-rose-600" />
                                    <span className="text-rose-600">Cerrar sesión</span>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>

                </section>

            </nav>
        </header>
    )
}

