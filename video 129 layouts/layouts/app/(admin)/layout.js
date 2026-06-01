import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Admin : Facebook - connect with friends and the world around you on Facebook.",

    description: "Admin : facebook is a social media platform that allows users to connect with friends and family, share photos and videos, and stay updated on news and events. It offers features such as messaging, groups, and a news feed to keep users engaged and connected.",
};

export default function RootLayout({ children }) {
    return (


        <>

            <span>
                Admin navbar
            </span>
            {children}
        </>
    );
}
