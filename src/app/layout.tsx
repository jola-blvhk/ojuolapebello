import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import SideBar from "@/components/Sidebar";
import "animate.css";
import "animate.css/animate.min.css";

export const metadata: Metadata = {
  title: "Guaba Design Studio",
  description: "Guaba Design Studio",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white  ${poppins.className}`}>
        {/* <div className=" w-full   lg:w-[35%] xl:w-[30%] h-screen">
          <SideBar />
        </div> */}
        {/* <div className="  h-full w-full m-5 "> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
