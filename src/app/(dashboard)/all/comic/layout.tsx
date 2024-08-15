import Sidebar from "@/components/organism/Sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={"flex"}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
