import localFont from "next/font/local";
// import Loading from "./loading";
import "./globals.scss";
import Smooth from '@/components/smooth';
import { Suspense } from "react";
import Loading from "./loading";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Food Basket Confectionery Ventures",
  description: "We sell with bread, cake and pastries",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body>
          <Loading />
        </body>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased text-[100%]`}
        >
          <Smooth>
            {children}
          </Smooth>
        </body>
      </Suspense>
    </html>
  );
}
