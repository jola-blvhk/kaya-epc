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
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-transparent text-foreground">
        {children}
      </body>
    </html>
  );
}
