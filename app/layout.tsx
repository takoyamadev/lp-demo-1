import { Header } from "@/components/header/Header";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "新発売コーヒー豆ブランド - Coffee Bliss",
  description:
    "最高品質のコーヒー豆をお届けする新ブランド。豊かな香りと深い味わいを体験してください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
