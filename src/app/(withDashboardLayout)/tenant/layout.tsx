import NavbarPage from "@/app/(withComonLayout)/navbar/page";
import TenantSidebar from "@/components/dashboard/tenant/TenantSidebar";



export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <NavbarPage/>
        <div className="flex h-screen bg-gray-100">
      <TenantSidebar />
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>
    </div>
    </>

  );
}