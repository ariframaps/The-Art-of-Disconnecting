import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Art of Disconnecting - Illiyin Sharing Session",
  description:
    "Memilih menghilang sejenak di era interkoneksi massal adalah bentuk kemewahan mental.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-neutral-950 text-white antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
