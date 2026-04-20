import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll"; // 👈 ADD THIS

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        {/* 🔥 SMOOTH SCROLL (TOP PE HI RAKHO) */}
        <SmoothScroll />

        <Header />

        {/* PAGE CONTENT */}
        <PageTransition>
          {children}
        </PageTransition>

        <WhatsAppFloat />
        <Footer />

      </body>
    </html>
  );
}