import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { DotsIcon } from "@/assets/icons/dots";
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { ResultFilterZoneI } from "../../interfaces";
import style from "./FilterZoneResult.module.css"


interface Props {
    results: ResultFilterZoneI[];
}

export const FilterZoneResultComponent = ({ results }: Props) => {
    return (
        <section className="overflow-hidden">
            <h1 className="text-2xl my-5 font-medium">Zona Atlántico - Magdalena</h1>

            <div className="overflow-y-auto h-[600px]">
                {
                    results.map((result) => (
                        <Accordion
                            key={result.id}
                            type="single"
                            collapsible
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{result.nameCity}</AccordionTrigger>

                                <AccordionContent>
                                    <RadioGroup defaultValue="option-one">
                                        {
                                            result.headquarters.map((headquarter, index) => (

                                                <Label
                                                    key={headquarter.id}
                                                    htmlFor={headquarter.id}
                                                    className={`${style.row} ${(index == result.headquarters.length -1) && 'border-none'}
                                                                h-18 flex flex-row items-center justify-between pl-3`}
                                                >
                                                    <RadioGroupItem
                                                        className="border-blue-700 text-blue-700"
                                                        value={headquarter.id}
                                                        id={headquarter.id}/>
                                                    <span className={`${style.cell} ${style.cell__important}`}>{headquarter.name}</span>
                                                    <span className={`${style.cell} text-gray-400`}>{headquarter.centro}</span>
                                                    <span className={`${style.cell} text-gray-400`}>{headquarter.id}</span>
                                                    <span className={`${style.cell} ${style.cell__important} flex flex-row px-0 gap-3`}>
                                                        <Progress
                                                            className="h-3"
                                                            value={headquarter.percentage}
                                                        />
                                                        {headquarter.percentage}%
                                                    </span>
                                                    <span className={`${style.cell} text-right`}>
                                                        <Badge className="bg-[#e7fcf8] text-[#00bd9d] hover:bg-[#00e3bc] hover:text-green-100">{headquarter.status}</Badge>
                                                    </span>
                                                    <span className={`${style.cell} flex justify-center`}>
                                                        <div className="flex justify-center items-center h-10 w-10 p-1  bg-gray-100 rounded-lg cursor-pointer">
                                                            <DotsIcon width={20} height={20} />
                                                        </div>
                                                    </span>
                                                </Label>

                                            ))
                                        }
                                    </RadioGroup>
                                </AccordionContent>

                            </AccordionItem>
                        </Accordion>
                    ))
                }
            </div>

        </section >
    )
}
