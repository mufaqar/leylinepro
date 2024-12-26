import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header"
import Footer from "./blogs/components/footer";

export const metadata: Metadata = {
  title: "LeyLine - Blog",
  description: "Achieve over 40% savings on premium CG video production using our AI-driven producer tool, seamlessly integrated with a global marketplace.",
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
