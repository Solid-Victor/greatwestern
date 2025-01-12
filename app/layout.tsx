import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), {
  ssr: false,
}) as React.FC<{ navItems: any }>;
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
import { navItems } from "@/data";
export const metadata: Metadata = {
  title: "great western construction and nginieering",
  description: "cosntruction and Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/GREAT-WESTERN-FARM-PORTRIAT-LOGO.png"
          sizes="any"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />

          <main className="relative bg-[rgba(10,15,25,1)] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
