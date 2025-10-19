import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "元氣醫館 - 專業中醫診所",
  description: "元氣醫館是一間專業的中醫診所，提供優質醫療服務，包括內科調理、婦科調理、針灸治療等。透過WhatsApp輕鬆預約，守護您的健康與元氣。",
  keywords: "中醫, 診所, 元氣醫館, 針灸, 中醫調理, 香港中醫, 健康, 養生, WhatsApp預約",
  openGraph: {
    title: "元氣醫館 - 專業中醫診所",
    description: "專業中醫診所，提供優質醫療服務，守護您的健康與元氣",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
