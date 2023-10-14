import type { Metadata } from "next";
import { Actor } from "next/font/google";

import "./globals.scss";
import Header from "@/components/Header";

const actor = Actor({ weight: "400", subsets: ["latin"] });

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
      <body className={actor.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
