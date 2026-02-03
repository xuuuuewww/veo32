import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/in",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - हाई-क्वालिटी इमेज और वीडियो जनरेशन के लिए AI मॉडल",
  description:
    "Veo 3.2 इमेज और वीडियो जनरेशन के लिए एक एडवांस्ड AI मॉडल है। क्रिएटिव और कॉमर्शियल इस्तेमाल के लिए टेक्स्ट से हाई-क्वालिटी कंटेंट बनाएं।",
  openGraph: {
    locale: "hi_IN",
    title: "Veo 3.2 - इमेज और वीडियो AI मॉडल",
    description: "Veo 3.2 के साथ अपनी कल्पना को सिनेमैटिक 8K रियलिटी में बदलें।",
  },
};

export default function InLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="hi" />
      {children}
    </>
  );
}
