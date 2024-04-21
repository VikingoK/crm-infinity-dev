"use client"
import { motion } from "framer-motion";
import { ResultFilterZoneI } from "../interfaces";
import { FilterZoneSelectionComponent, FilterZoneResultComponent } from "@/app/components/filter-zone";

interface Props {
    className: string;
}

export const FilterZoneComponent = ({ className }: Props) => {

    const resultFilterZone: ResultFilterZoneI[] = [
        {
            id: 1,
            nameCity: 'Barranquilla',
            headquarters: [
                {
                    name: 'PDS Estación Calle 84',
                    centro: 'Com. Industrial',
                    id: 'SC-22-023',
                    percentage: 68,
                    status: 'Activo',
                },
                {
                    name: 'PDS Estación Calle 30',
                    centro: 'Com. Industrial',
                    id: 'SC-22-024',
                    percentage: 38,
                    status: 'Activo',
                },
                {
                    name: 'PDS Estación Brisas del Mar',
                    centro: 'Com. Industrial',
                    id: 'SC-22-025',
                    percentage: 58,
                    status: 'Activo',
                },
            ]
        },
        {
            id: 2,
            nameCity: 'Santa Marta',
            headquarters: [
                {
                    name: 'PDS Estación Calle 84',
                    centro: 'Com. Industrial',
                    id: 'SC-22-026',
                    percentage: 58,
                    status: 'Activo',
                },
                {
                    name: 'PDS Estación Calle 30',
                    centro: 'Com. Industrial',
                    id: 'SC-22-027',
                    percentage: 22,
                    status: 'Activo',
                },
                {
                    name: 'PDS Estación Brisas del Mar',
                    centro: 'Com. Industrial',
                    id: 'SC-22-028',
                    percentage: 12,
                    status: 'Activo',
                },
            ]
        },
        {
            id: 3,
            nameCity: 'Cartagena',
            headquarters: [
                {
                    name: 'PDS Estación Calle 84',
                    centro: 'Com. Industrial',
                    id: 'SC-22-029',
                    percentage: 93,
                    status: 'Activo',
                },
                {
                    name: 'PDS Estación Calle 30',
                    centro: 'Com. Industrial',
                    id: 'SC-22-030',
                    percentage: 84,
                    status: 'Activo',
                },
                {
                    name: 'PDS Estación Brisas del Mar',
                    centro: 'Com. Industrial',
                    id: 'SC-22-031',
                    percentage: 3,
                    status: 'Activo',
                },
            ]
        },
        {
            id: 4,
            nameCity: 'Riohacha',
            headquarters: [
                {
                    name: 'PDS Estación Calle 84',
                    centro: 'Com. Industrial',
                    id: 'SC-22-032',
                    percentage: 23,
                    status: 'Activo',
                },
                {
                    name: 'PDS Estación Calle 30',
                    centro: 'Com. Industrial',
                    id: 'SC-22-033',
                    percentage: 45,
                    status: 'Activo',
                },
                {
                    name: 'PDS Estación Brisas del Mar',
                    centro: 'Com. Industrial',
                    id: 'SC-22-034',
                    percentage: 81,
                    status: 'Activo',
                },
            ]
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 0, x: 10}}
            animate={{ opacity: 1, y: 0, x: 0 }}
            className={className}
        >
            <div className="w-full h-full p-5">
                <div className="w-full h-full rounded-md pt-10 px-5 bg-white">
                    <FilterZoneSelectionComponent />
                    <FilterZoneResultComponent results={resultFilterZone} />
                </div>
            </div>
        </motion.div>
    )
}
