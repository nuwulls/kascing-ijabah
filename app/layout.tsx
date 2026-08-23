import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KASCING IJABAH | Pupuk Organik",
  description:
    "KASCING IJABAH — solusi pupuk organik untuk membantu menjaga kesehatan tanah dan mendukung pertumbuhan tanaman.",
  keywords: [
    "KASCING IJABAH",
    "pupuk organik",
    "pupuk kascing",
    "pupuk tanaman",
    "pupuk petani",
    "pupuk organik Makassar",
  ],
  authors: [{ name: "KASCING IJABAH" }],
  openGraph: {
    title: "KASCING IJABAH | Pupuk Organik",
    description:
      "Solusi tanah sehat, panen meningkat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}