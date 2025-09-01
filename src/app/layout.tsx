import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/Theme-provider"
import { Backgroundtheme } from "@/components/Background-theme";
import { Toaster } from "sonner";


const oswald = Oswald({
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-oswald", 
})

export const metadata: Metadata = {
  title: "BabyBoy",
  description: "A Convinient Web based Wallet",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} antialiased min-h-screen w-full relative`}>
          <Toaster/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Backgroundtheme>
            <div className="mx-90 h-full">
              <Header />
              {children}
            </div>
          </Backgroundtheme>
        </ThemeProvider>
      </body>
    </html>
  );
}
