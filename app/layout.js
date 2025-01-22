import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const mainFont = Geist({
  variable: "--font-main",
  subsets: ["latin"],
});

const mainFontMono = Geist_Mono({
  variable: "--font-main-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discussionation",
  description: "Nation of Discussions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} ${mainFontMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
