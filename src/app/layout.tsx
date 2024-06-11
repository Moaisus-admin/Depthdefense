import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.min.css";
import "../app/styles/boxicons.min.css";
import "../app/styles/meanmenu.min.css";
import "../app/styles/flaticon.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global style

import "../app/styles/responsive.css";
import "../app/styles/style.css";
import "../app/styles/rtl.css";
// Global rtl style

import type { Metadata } from "next";
import { Lato } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Depthdefense - Cyber Security Company",
  description: "Cyber Security Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="graphics" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${lato.className}`}>
        <div id="app-container">
          {children}
          <GoTop />
        </div>
      </body>
    </html>
  );
}
