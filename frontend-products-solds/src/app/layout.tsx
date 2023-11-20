import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { FileContextProvider } from "../context/FileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Sold",
  description: "Product Sold",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FileContextProvider>
        <body className={inter.className}>{children}</body>
      </FileContextProvider>
    </html>
  );
}
