import type { Metadata } from "next";
import { Ubuntu, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css"
import "../../components/Header/Header";
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
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntuMonoBold.variable} ${ubuntuRegular.variable} antialiased ${styles.page}`}
      >
          <Header />
          <main className={styles.main}>{children}</main>

          <Footer />
      </body>
    </html>
  );
}
