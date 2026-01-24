import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veo 3.2 is coming! AI Image and Video Generation Model for High-Quality Visual Creation",
  description:
    "Veo 3.2 is an advanced AI image and video generation model enabling high-quality text-to-image and text-to-video creation for creative and commercial use.",
  icons: {
    icon: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png",
    shortcut: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png",
    apple: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-dark font-display text-white selection:bg-primary/40 animate-bg-gradient">
        {children}
      </body>
    </html>
  );
}
