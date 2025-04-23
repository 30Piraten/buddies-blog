import type { Metadata } from "next";
import { Rubik, Ubuntu, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntuMonoBold = Ubuntu({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: "700"
})

const ubuntuRegular = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "300"
})

const rubikBold = Rubik({
    variable: "--font-rubik-bold",
    subsets: ["latin"],
    weight: "800",
});

const rubikNormal = Rubik({
    variable: "--font-rubik-normal",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
  title: "Buddy.me",
  description: "Gamified social app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${ubuntuMonoBold.variable} 
        ${ubuntuRegular.variable} 
        ${rubikBold.variable} 
        ${rubikNormal.variable}   
        antialiased ${styles.page}`}
      >
          <Header />
          <main className={styles.main}>{children}</main>

          <Footer />
      </body>
    </html>
  );
}
