import NavbarPage from "@/app/(withComonLayout)/navbar/page";
import UserSidebar from "@/components/dashboard/user/UserSidebar";




export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <NavbarPage/>
        <div className="flex h-screen bg-gray-100">
      <UserSidebar></UserSidebar>
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>
    </div>
    </>

  );
}