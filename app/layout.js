import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { profile } from "../data/content";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.positioning,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
