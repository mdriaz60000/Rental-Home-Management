import Footer from "@/components/shared/Footer";
import NavbarPage from "./navbar/page";
 


const CommonLayout = async  ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <NavbarPage />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
