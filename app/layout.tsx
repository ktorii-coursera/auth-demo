import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Auth Demo",
  description: "Password protected app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
