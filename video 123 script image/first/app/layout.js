import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Facebook - connect with the world",
  description: "this is the facebook and we can connect with the world usijg facebook",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >




      <body className="min-h-full flex flex-col">
        <Navbar />


        <div className="container mx-auto min-h-[85vh]">

          {children}
        </div>
        <Footer />



      </body>


    </html>
  );
}
