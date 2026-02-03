"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function Home() {
  return (
    <>
      <HomeContent t={translations.en} locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: "Veo 3.2",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                description:
                  "Google Veo 3.2 is an advanced AI video generation model capable of creating 1080p+ video clips from text prompts. It features high coherence and cinematic quality.",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "125",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is Veo 3.2?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Veo 3.2 is an advanced AI model for both image and video generation. It converts text prompts into high-quality visuals using cutting-edge AI algorithms. This makes text-to-image and text-to-video creation fast and efficient.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are the key features of Veo 3.2?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Veo 3.2 supports AI image generation, AI video generation, text-to-image, and text-to-video capabilities. It offers high-resolution output, motion consistency, and customizable style control. These features make it ideal for creative and commercial projects.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does Veo 3.2 differ from other AI models?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Compared to other AI models, Veo 3.2 produces more realistic visuals and smoother video generation. Its advanced text-to-image and text-to-video algorithms ensure better style consistency and motion accuracy.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I customize the style of the generated content?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Veo 3.2 allows full style customization for both images and videos. Users can control visual elements, color tones, and motion effects to match their creative vision.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can I get started with Veo 3.2?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "To get started, sign up on the Veo platform and enter your text prompts. Veo 3.2 will generate AI images and videos quickly, ready for creative or commercial use.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
