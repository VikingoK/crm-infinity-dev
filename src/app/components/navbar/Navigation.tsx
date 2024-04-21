"use client"
import { useAreaContext } from "@/app/providers/AreaProvider";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const NavigationComponent = () => {

    const routes = [
        {
            id: 0,
            name: "Home",
            path: "/",
            children: [
                { id: 1, name: "Inversión", path: "/" },
                { id: 2, name: "Garantías", path: "/" },
                { id: 3, name: "Aprobación", path: "/" },
            ]
        }
    ];

    const area = useAreaContext();

    return (
        <Breadcrumb>
            <BreadcrumbList>

                {
                    area.currentArea == 0
                        ? <BreadcrumbItem>
                            <BreadcrumbPage>{routes[0].name}</BreadcrumbPage>
                          </BreadcrumbItem>
                        : routes[0].children.map((route) => (

                            (route.id == area.currentArea) &&
                            <BreadcrumbItem
                                key={route.id}
                            >
                                <BreadcrumbPage> {routes[0].name} </BreadcrumbPage>
                                <BreadcrumbSeparator />
                                <BreadcrumbLink> {route.name} </BreadcrumbLink>
                            </BreadcrumbItem>

                        ))
                }

            </BreadcrumbList>
        </Breadcrumb>

    )
}
