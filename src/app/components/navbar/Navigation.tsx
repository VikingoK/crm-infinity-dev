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
                        ? <BreadcrumbPage>{routes[0].name}</BreadcrumbPage>
                        : routes[0].children.map((route) => (

                            (route.id == area.currentArea) &&
                            <>
                                <BreadcrumbPage>{routes[0].name}</BreadcrumbPage>
                                <BreadcrumbSeparator />
                                <BreadcrumbLink
                                    key={route.id}
                                    href="/"
                                >
                                   {route.name}
                                </BreadcrumbLink>
                            </>

                        ))
                }

            </BreadcrumbList>
        </Breadcrumb>

    )
}
