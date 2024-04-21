import { NavbarComponent } from "@/app/components/navbar";
import { AreaProvider } from "@/app/providers/AreaProvider";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <AreaProvider>
      <div className="bg-[#f6f8fb] h-[90dvh]">
          <NavbarComponent />

          <div className="h-full">
            {children}
          </div>
      </div>
    </AreaProvider>
  );
}