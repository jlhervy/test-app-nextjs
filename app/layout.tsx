"use client";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./utils/sidebar";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout");
  return (
    <html lang="en" className="min-h-screen dark">
      <body className="flex flex-col mx-auto text-gray-100 pt-10 w-6/12">
      <SideBar />
        {children}</body>
    </html>
  );
}
