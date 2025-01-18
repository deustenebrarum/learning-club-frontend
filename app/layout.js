import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMonoFont = JetBrains_Mono({
  variable: "--font-main",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "LearningClub",
  description: "Лучшая платформа для освоения новой профессии",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMonoFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
