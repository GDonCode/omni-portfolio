import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniRay Group — Web, Brand, Live Commerce & Operations",
  description: "Jamaica's creative conglomerate: web development, brand design, live commerce and operations under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
