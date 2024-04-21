import { Navbar } from "@/app/components";
import { DetailZoneProvider } from "@/app/providers/DetailZoneProvider";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <DetailZoneProvider>
      <div className="bg-[#f6f8fb] h-[90dvh]">
          <Navbar />

          <div className="h-full">
            {children}
          </div>
      </div>
    </DetailZoneProvider>
  );
}