import Sidebar from "@/components/organism/Sidebar";
import Header from "@/components/molecules/Header";

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
