import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaya EPC Limited",
  description: "EPC contractor for energy, processing, and industrial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col text-foreground">
        {children}
      </body>
    </html>
  );
}
