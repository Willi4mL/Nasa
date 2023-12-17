import type { Metadata } from "next";
import "./globals.css";
import Menu from "./components/Menu";

export const metadata: Metadata = {
  title: "nasarest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Menu />
      </body>
    </html>
  );
}
