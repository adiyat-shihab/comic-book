import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME } from "../../constant";
import Navbar from "@/components/organism/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Library",
  description: "A book library app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;
  return (
    <html lang="en">
      <body className={`  ${poppins.className}`}>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}
