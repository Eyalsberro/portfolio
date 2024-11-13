import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'


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
const Londrina = localFont({
  src: "./fonts/LondrinaOutline-Regular.ttf",
  variable: "--font-londrina-mono",
  weight: "400",
});
const Teko = localFont({
  src: "./fonts/Teko-VariableFont_wght.ttf",
  variable: "--font-teko",
  weight: "400 100",
});

export const metadata = {
  title: "Eyal Sberro Website",
  description: "Portfolio with projects and photography work worldwide",
  image: "/images/eyalsberro.png",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${Londrina.variable} ${Teko.variable}`}>
        <Analytics />
        {children}
      </body>
      <GoogleAnalytics gaId="G-8RF6X4SVBE" />
    </html>
  );
}
