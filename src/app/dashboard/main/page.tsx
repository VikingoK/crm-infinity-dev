import { DetailZoneComponent, FilterZoneComponent } from "@/app/components";

export default function MainPage() {

  return (
    <div className="h-[90vh] overflow-scroll md:overflow-hidden grid grid-cols-12 gap2">
      <FilterZoneComponent className="col-span-12 md:col-span-8 h-full overflow-hidden flex flex-col gap-6" />
      <DetailZoneComponent  className="col-span-12 md:col-span-4 h-full bg-white"/>
    </div>
  );
}