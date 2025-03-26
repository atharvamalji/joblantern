import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/ui/header.component";
import Footer from "@/components/ui/footer.component";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobLantern | Apply for jobs the right way",
  description: "JobLantern helps you track and apply for jobs the right way. Updates job listings every 10 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
