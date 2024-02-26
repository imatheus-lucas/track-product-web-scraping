import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "sonner";
import logo from '../assets/logo.png';
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebPriceTracker",
  description: "Track your products to discover the best prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="flex items-center justify-between px-20 py-10">
            <Link href="/" className="flex items-center gap-1">
              <Image src={logo} alt="logo" width={30} height={30} />
              <h1 className="text-xl font-bold">
                WebPrice
                <span className="text-red-500">Tracker</span>
              </h1>
            </Link>
            <ModeToggle />
          </header>
          {children}
          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  );
}
