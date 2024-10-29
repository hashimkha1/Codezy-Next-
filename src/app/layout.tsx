import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import  Footer  from "@/components/footer";
import DescriptionProvider from "@/components/context/description";
import ScrollButton from "@/components/ScrollButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <Navbar/>
        <ScrollButton/>
        <DescriptionProvider>
        {children}
        </DescriptionProvider>
        <Footer/>
      </body>
    </html>
  );
}
