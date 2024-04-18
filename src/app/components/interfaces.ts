export interface ResultFilterZoneI {
    id: number
    nameCity: string;
    headquarters: HeadquartersI[];
}

export interface HeadquartersI {
    name: string;
    centro: string;
    id: string;
    percentage: number;
    status: string;
}