import { Navbar } from "@/app/components/index";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f6f8fb] h-[90dvh]">
        <Navbar />

        <div className="h-full">
          {children}
        </div>
    </div>
  );
}