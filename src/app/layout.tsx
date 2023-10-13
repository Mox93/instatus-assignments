import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.scss";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaLog",
  description:
    "Activity log tab enabling IT admins to track their team’s activity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
