import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brightstar",
  description: "Brightstar static website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
