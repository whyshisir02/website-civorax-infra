import type { Metadata } from "next";
import { headers } from "next/headers";
import { Plus_Jakarta_Sans, Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CivoraX Infra Pvt. Ltd.",
  description:
    "CivoraX Infra Pvt. Ltd. is a Nepal-based infrastructure company focused on construction, design, planning, renovation, and project execution.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("X-NEXT-INTL-LOCALE") ?? "en";

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={`${sora.variable} ${manrope.variable} ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}