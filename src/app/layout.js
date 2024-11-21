import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

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

const fafoSans = localFont({
  src: "./fonts/Answers.otf",
  variable: "--font-fafo",
});

export const metadata = {
  title: "Gingerbread Quiz",
  description: "A work of ❤️ from Hope SG x Indigitous SG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gingerbread Quiz</title>
        <meta name="description" content="A work of ❤️ from Hope SG x Indigitous SG"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fafoSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}