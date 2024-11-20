import localFont from "next/font/local";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fafoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}