import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Menu } from "@/components/menu";
import { ClientProviders } from "@/components/clientProvider"

const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "villa booking",
  description: "the best place to rent and own villas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    > 
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet"></link>
    </head>
      <body className="min-h-[200vh] min-w-full">
        <ClientProviders>
          <Menu />
          {children}
        </ClientProviders>
        </body>
    </html>
  );
}
