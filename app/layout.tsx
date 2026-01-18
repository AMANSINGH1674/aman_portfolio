import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Singh | AIML Engineer Portfolio",
  description: "AIML Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
