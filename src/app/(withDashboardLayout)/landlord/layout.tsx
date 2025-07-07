import NavbarPage from "@/app/(withComonLayout)/navbar/page";
import LandlordSidebar from "@/components/dashboard/landlord/LandlordSidebar";


export default function LandlordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <NavbarPage/>
    <div className="flex h-screen bg-gray-100">
      <LandlordSidebar />
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>
    </div>
    </>

  );
}