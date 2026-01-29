import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://veo32.ai"),
  alternates: {
    canonical: "/",
  },
  title: "Veo 3.2 - AI Image and Video Generation Model for High-Quality Visual Creation",
  description:
    "Veo 3.2 is an advanced AI image and video generation model enabling high-quality text-to-image and text-to-video creation for creative and commercial use.",
  keywords: [
    "Veo 3.2",
    "AI video generation",
    "AI image generation",
    "text-to-video",
    "text-to-image",
    "AI cinematography",
    "8K video generation",
    "artificial intelligence",
  ],
  authors: [{ name: "Veo Technologies" }],
  creator: "Veo Technologies",
  publisher: "Veo Technologies",
  icons: {
    icon: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png",
    shortcut: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png",
    apple: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png",
  },
  verification: {
    google: "60obgy5Ja4eGJ55dWEQz8T_HpYOI_1VedKXXP6zXYCs",
  },
  openGraph: {
    title: "Veo 3.2 - AI Image and Video Generation Model",
    description:
      "Transform your wildest imaginations into cinematic 8K reality with Veo 3.2. The frontier of AI cinematography is here.",
    url: "https://veo32.com",
    siteName: "Veo 3.2",
    images: [
      {
        url: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png",
        width: 1200,
        height: 630,
        alt: "Veo 3.2 - AI Video Generation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veo 3.2 - AI Image and Video Generation Model",
    description:
      "Transform your wildest imaginations into cinematic 8K reality with Veo 3.2.",
    images: ["https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <GoogleAnalytics gaId="G-QC1XZ7M93X" />
      </body>
    </html>
  );
}
