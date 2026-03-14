import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task B",
  description: "Vrittech Task B",
};

const outfit = Outfit({
  variable: "--font-outfit",
});

const oakesgrotesk = localFont({
  variable: "--font-oakesgrotesk",
  src: [
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk Light Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk Medium Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk Regular Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/Oakes_Grotesk/Oakes Grotesk SemiBold Italic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
});

const nohemi = localFont({
  src: "./assets/fonts/nohemi/Nohemi-VF.ttf",
  variable: "--font-nohemi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oakesgrotesk.variable} ${nohemi.variable} ${outfit.variable}`}
    >
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
