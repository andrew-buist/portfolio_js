import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";

const jersey10 = Jersey_10({
  subsets: ["latin"],
  variable: "--font-jersey10",
  weight: "400"
});

export const metadata: Metadata = {
  title: "andrew's place"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jersey10.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
