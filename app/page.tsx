"use client";

import { useState } from "react";
import { LazyVideo } from "@/components/LazyVideo";

const trendingVideos = [
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/01ec5f2f-84fc-4eaf-a8bc-c2cbd31c5552_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/1583324e-50b1-498e-a1ec-e39acf81d36b_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/1ae0bf2d-b906-4b7e-968d-d00f3dd27d97_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/57a37114-90dc-4959-9280-0aa9544321e1_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/5968b943-8be8-40bd-89d8-c31111bdc2f7_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/5f0140c6-aa9f-4a85-b772-45d051043a55_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/6fdcfaec-76af-4ad1-a962-ee6eb0878b5f_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/860e3140-3def-412a-98b0-991342899d18_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/9380d07f-2ef9-411c-95ea-09fb4c887916_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/b1b480a6-b2a7-4751-abbf-eba85957ebd4_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/b630e4b8-a0fa-45f6-a1bb-65ae7cc9ffe8_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/c2f580b7-93ee-4b82-b68e-ded30bb23250_hd.mp4",
];

const cinematicVideos = [
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/0136bf9d-a9ec-49c8-896d-41ebdc98860d_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/143a83d9-5731-45f6-a3cd-a26103fe334f_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/57a37114-90dc-4959-9280-0aa9544321e1_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/5a7bd9ec-7c9b-4283-b6ea-7e256c392a56_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/7fde102d-b42a-4553-b11e-4983cdac1460_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/985aff0f-4024-4094-91be-ecb3080bfa8a_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/a4ee3c2b-08f1-4304-a414-19c6e9c6a234_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/a63744c8-1aa3-4f58-9aa0-1844100a28b2_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/a7f8ec7f-0e99-4d57-baf5-eb7aa049ca34_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/ba94a4eb-7348-4b66-9acf-3a784b39eeed_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/be1f17b1-0dcb-4cd5-b215-99d52918d80c_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/be55e554-062e-4364-b80c-735804f47e17_hd.mp4",
];

const animeVideos = [
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/0d83d5f4-f027-4461-bd4d-711befc65285_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/0e904035-01ec-4ce4-9651-f86a8b9588c7_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/2953ec82-a04a-4c57-8968-a748b51a2e36_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/6b5f05bb-3ad4-4465-8aab-27affb44b2a7_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/852f1be1-0ad3-4cc8-a5e0-6e32e23aa181_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/8706e66f-2c70-473a-ae7b-94353ad2d1cb_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/90f03655-7a25-4331-8ffd-211464176d86_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/9133c40b-88c8-4d09-93e6-11be7a925849_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/9a915c71-cae9-448d-8dd2-e36da4643b26_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/a1163f7a-7aaf-4ec8-864d-705e9c42170b_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/fb572d0d-c38c-4cdd-92e1-0b1b4a2bb1fe_hd.mp4",
  "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/fd33361c-5a1a-4e88-bbcb-930d76ba7766_hd.mp4",
];

const featuredPrompts = [
  {
    id: "cinematic",
    tag: "Metallic Couture",
    tagIcon: "movie",
    prompt:
      "Cinematic fashion film: a model in a metallic silver gown under a single spotlight in a dark minimalist studio, glossy floor reflections, slow dolly-in, hyper-realistic 8k, volumetric haze, high-contrast lighting, anamorphic look.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "Mad Max",
    tagIcon: "smart_toy",
    prompt:
      "Low-angle tracking shot of a biker racing down a sunlit desert highway, armored rider, roaring muscle trucks kicking up dust, Mad Max chase vibe, cinematic teal-orange grade, 4K, motion blur.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "Space Drift",
    tagIcon: "grass",
    prompt:
      "Cinematic orbital shot: lone astronaut drifting by a damaged satellite above Earth's curved horizon, sunrise lens flare, floating debris, slow rotating camera, ultra-real 4K, deep space contrast.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "Neon Cyberpunk",
    tagIcon: "movie_filter",
    prompt:
      "Cinematic street-level shot of a lone hooded figure walking through a rain-soaked neon alley in Neo-Tokyo, steam vents, wet pavement reflections, cyberpunk vibe, ultra-real 8k, volumetric fog.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/prompt-3.mp4",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"trending" | "cinematic" | "anime">("trending");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPrompt = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentVideos = 
    activeTab === "trending" 
      ? trendingVideos 
      : activeTab === "cinematic" 
      ? cinematicVideos 
      : animeVideos;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://www.virax.ai/">
              <img
                src="https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png"
                alt="Veo 3.2 Logo"
                width={36}
                height={36}
                className="h-9 w-auto select-none drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]"
              />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              href="https://www.virax.ai/"
              aria-label="Navigate to ViraX"
            >
              Features
            </a>
            <a
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              href="https://www.virax.ai/"
              aria-label="Navigate to ViraX"
            >
              Gallery
            </a>
            <a
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              href="https://www.virax.ai/"
              aria-label="Navigate to ViraX"
            >
              Pricing
            </a>
            <a
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              href="https://www.virax.ai/"
              aria-label="Navigate to ViraX"
            >
              API
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://www.virax.ai/"
              className="text-white/70 hover:text-white text-sm font-medium px-4"
            >
              Log in
            </a>
            <a
              href="https://www.virax.ai/"
              className="bg-white text-slate-900 hover:bg-white/90 text-sm font-bold px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_18px_rgba(148,163,184,0.45)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Veo 3.2 hero video showcasing AI-generated cinematic content"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
              <source src="https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/herovideo2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 hero-video-overlay z-10" />
          </div>
          <div className="relative z-20 w-full max-w-5xl px-6 text-center">
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] md:leading-[1.05] mb-6 tracking-tighter text-center max-w-4xl mx-auto">
              <span className="block">Create Magic with</span>
              <span className="block italic mt-2 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent hero-title-glow-bright">
                Veo 3.2
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Veo 3.2 transforms your wildest imaginations into cinematic 8K
              reality. The frontier of AI cinematography is here.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="prompt-glow relative flex flex-col md:flex-row w-full bg-white/[0.05] backdrop-blur-xl border border-white/10 p-3 rounded-2xl transition-colors duration-300 shadow-xl">
                <div className="flex flex-1 items-center px-6 py-6">
                  <span className="material-symbols-outlined text-primary mr-4 scale-125">
                    auto_awesome
                  </span>
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-white/20 text-xl font-light outline-none"
                    placeholder="A futuristic samurai standing in the rain of Neo-Tokyo..."
                    type="text"
                  />
                </div>
                <a
                  href="https://www.virax.ai/"
                  className="generate-glow bg-white text-slate-900 hover:bg-white/90 font-bold px-12 py-6 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 group shadow-[0_0_25px_rgba(124,13,242,0.7)]"
                >
                  <span className="text-lg">Try Veo 3.2 Now</span>
                  <span className="material-symbols-outlined transition-transform group-hover:rotate-12 text-slate-900">
                    bolt
                  </span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.15em] mr-4 font-bold">
                  Trending Styles:
                </span>
                <span
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60"
                  aria-label="Trending style: Cyberpunk"
                >
                  #Cyberpunk
                </span>
                <span
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60"
                  aria-label="Trending style: Studio Ghibli"
                >
                  #StudioGhibli
                </span>
                <span
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60"
                  aria-label="Trending style: Hyper Realistic"
                >
                  #HyperRealistic
                </span>
                <span
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60"
                  aria-label="Trending style: Synthwave"
                >
                  #Synthwave
                </span>
                <span
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60"
                  aria-label="Trending style: Anamorphic Shot"
                >
                  #AnamorphicShot
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="section-below-fold py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-3">
                Community Showcase Created by Veo 3.2
              </h2>
              <p className="text-white/40">
                Real results generated by creators around the world.
              </p>
            </div>
            <div className="flex gap-2 bg-white/5 p-1.5 rounded-xl border border-white/5">
              <button 
                onClick={() => setActiveTab("trending")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-6 transition-all ${
                  activeTab === "trending" 
                    ? "bg-white shadow-[0_0_18px_rgba(148,163,184,0.35)]" 
                    : "bg-transparent hover:bg-white/5"
                }`}
              >
                <p className={`text-sm font-medium ${activeTab === "trending" ? "text-slate-900" : "text-white/50 hover:text-white"}`}>Trending</p>
              </button>
              <button 
                onClick={() => setActiveTab("cinematic")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-6 transition-all ${
                  activeTab === "cinematic" 
                    ? "bg-white shadow-[0_0_18px_rgba(148,163,184,0.35)]" 
                    : "bg-transparent hover:bg-white/5"
                }`}
              >
                <p className={`text-sm font-medium ${activeTab === "cinematic" ? "text-slate-900" : "text-white/50 hover:text-white"}`}>Cinematic</p>
              </button>
              <button 
                onClick={() => setActiveTab("anime")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-6 transition-all ${
                  activeTab === "anime" 
                    ? "bg-white shadow-[0_0_18px_rgba(148,163,184,0.35)]" 
                    : "bg-transparent hover:bg-white/5"
                }`}
              >
                <p className={`text-sm font-medium ${activeTab === "anime" ? "text-slate-900" : "text-white/50 hover:text-white"}`}>Anime</p>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {currentVideos.map((videoUrl, index) => (
              <a
                key={videoUrl}
                href="https://www.virax.ai/"
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <LazyVideo
                  src={videoUrl}
                  ariaLabel={`Community showcase video ${index + 1} from ${activeTab} collection`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-6">
                  <p className="text-white text-xs font-medium">
                    Video showcase #{index + 1}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="https://www.virax.ai/"
              className="inline-block px-10 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105 active:scale-95"
            >
              Explore All Creations
            </a>
          </div>
        </section>

        <section className="section-below-fold py-24 md:py-32 px-6 relative overflow-hidden min-h-screen flex flex-col justify-center">
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Why <span className="text-primary">Veo 3.2</span> Leads the Field
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg">
                Comparing the giants of AI video generation in 2026. Which
                model delivers the best cinematic realism, motion coherence,
                and prompt adherence? See why Veo 3.2 is the new industry
                standard.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 md:px-6 text-sm font-semibold text-white/60 uppercase tracking-wider">
                      <h3 className="text-sm font-semibold uppercase tracking-wider m-0">
                        Feature
                      </h3>
                    </th>
                    <th className="py-4 px-4 md:px-6 text-sm font-semibold text-white bg-primary/10 border-l border-primary/20">
                      <h3 className="text-sm font-semibold m-0 flex items-center gap-2">
                        Google Veo 3.2
                        <span className="text-xs font-normal text-primary whitespace-nowrap">
                          Winner 🏆
                        </span>
                      </h3>
                    </th>
                    <th className="py-4 px-4 md:px-6 text-sm font-semibold text-white/70">
                      <h3 className="text-sm font-semibold m-0">
                        OpenAI Sora
                      </h3>
                    </th>
                    <th className="py-4 px-4 md:px-6 text-sm font-semibold text-white/70">
                      <h3 className="text-sm font-semibold m-0">
                        Runway Gen-3 Alpha
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  {[
                    {
                      feature: "Max Resolution",
                      veo: "4K (Upscaled)",
                      sora: "1080p",
                      runway: "1080p / 4K (Turbo)",
                    },
                    {
                      feature: "Video Duration",
                      veo: "60s+ (Continuous)",
                      sora: "Up to 60s",
                      runway: "10s – 40s",
                    },
                    {
                      feature: "Prompt Adherence",
                      veo: "98% (Deep Semantic)",
                      sora: "90% (High Physics)",
                      runway: "85% (Artistic)",
                    },
                    {
                      feature: "Generation Speed",
                      veo: "Near Real-time",
                      sora: "Slow (Minutes)",
                      runway: "Fast (Turbo mode)",
                    },
                    {
                      feature: "Motion Control",
                      veo: "Camera & Subject Control",
                      sora: "Physics Simulation",
                      runway: "Motion Brush",
                    },
                    {
                      feature: "Availability",
                      veo: "Open Access (Web)",
                      sora: "Restricted / Pro",
                      runway: "Subscription",
                    },
                    {
                      feature: "Cost",
                      veo: "Free Trial / Freemium",
                      sora: "$20+/mo (Estimated)",
                      runway: "Credit Based",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/5 ${
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <td className="py-3 md:py-4 px-4 md:px-6 font-medium text-white/80">
                        {row.feature}
                      </td>
                      <td className="py-3 md:py-4 px-4 md:px-6 text-white border-l border-primary/20 bg-primary/5">
                        {row.veo}
                      </td>
                      <td className="py-3 md:py-4 px-4 md:px-6 text-white/60">
                        {row.sora}
                      </td>
                      <td className="py-3 md:py-4 px-4 md:px-6 text-white/60">
                        {row.runway}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 md:mt-20">
              <div className="glass-card p-8 rounded-2xl border-2 border-primary bg-primary/10 flex flex-col relative shadow-[0_0_0_1px_rgba(168,85,247,0.3),0_0_40px_rgba(168,85,247,0.25),0_0_80px_rgba(168,85,247,0.1)] ring-2 ring-primary/20 ring-offset-2 ring-offset-[#0f0a1f] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.5),0_0_50px_rgba(168,85,247,0.35),0_0_100px_rgba(168,85,247,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Veo 3.2 — The Cinematic Powerhouse
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  Built on DeepMind&apos;s latest transformer architecture, Veo
                  3.2 represents a quantum leap in semantic understanding. Unlike
                  its predecessors, Veo 3.2 captures the nuances of
                  &apos;cinematic lighting&apos; and &apos;camera movement&apos;
                  with pixel-perfect accuracy. It excels in maintaining character
                  consistency across long clips, making it the preferred choice
                  for storytellers and filmmakers in 2026.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✅</span> Best-in-class
                    prompt adherence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✅</span> 1080p+ native
                    resolution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✅</span> Consistent character
                    identity
                  </li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-white">
                  OpenAI Sora — The Physics Simulator
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  Sora remains a strong contender with its deep understanding of
                  physical world simulation. It handles complex object
                  interactions and fluid dynamics exceptionally well. However,
                  its access remains limited, and it often struggles with
                  specific camera control directives compared to Veo 3.2.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-white/60">✅</span> Realistic physics
                    engine
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-white/60">✅</span> Complex scene
                    transitions
                  </li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Runway Gen-3 Alpha — The Artist&apos;s Tool
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  Runway Gen-3 continues to offer granular control for editors
                  with features like Motion Brush and Director Mode. While it
                  offers high artistic freedom, Veo 3.2 surpasses it in raw
                  generation speed and prompt comprehension for zero-shot video
                  creation.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-white/60">✅</span> Fine-tuned motion
                    controls
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-white/60">✅</span> Artistic style
                    transfer
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-white/70 max-w-3xl mx-auto mt-14 md:mt-16 text-lg leading-relaxed">
              While Sora simulates the world and Runway paints it, Veo 3.2
              understands it. For users seeking the best balance of speed,
              quality, and accessibility, Veo 3.2 is the clear winner for 2026
              video generation.
            </p>

            <div className="flex justify-center mt-10">
              <a
                href="https://www.virax.ai/image2video"
                className="generate-glow inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-white/90 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(124,13,242,0.5)]"
              >
                Try Veo 3.2 for Free Now
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        <section id="featured-prompts" className="section-below-fold min-h-screen py-24 md:py-32 px-6 relative overflow-hidden flex flex-col justify-center">
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Veo 3.2 <span className="text-primary">Featured Prompts</span>
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg">
                Hand-picked prompts to get the best out of Veo 3.2. Copy and try them in your next creation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredPrompts.map((item) => (
                <article
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-white/20 via-primary/30 to-white/10 shadow-xl"
                >
                  <div className="relative h-full rounded-2xl bg-slate-900/90 border border-white/5 p-0 flex flex-col">
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-900" aria-hidden>
                      <LazyVideo
                        src={item.videoUrl}
                        ariaLabel={`Featured prompt: ${item.tag}`}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 mb-3">
                        <span className="material-symbols-outlined text-sm">{item.tagIcon}</span>
                        {item.tag}
                      </span>
                      <p className="text-white/80 text-sm leading-relaxed mb-4 flex-1 line-clamp-4" title={item.prompt}>
                        &ldquo;{item.prompt}&rdquo;
                      </p>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => handleCopyPrompt(item.id, item.prompt)}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-primary/30 border border-white/10 hover:border-primary/40 text-white text-sm font-medium transition-all cursor-pointer min-h-[44px] min-w-[44px]"
                          aria-label={copiedId === item.id ? "Copied!" : "Copy prompt"}
                        >
                          {copiedId === item.id ? (
                            <>
                              <span className="material-symbols-outlined text-lg text-primary">check</span>
                              Copied!
                            </>
                          ) : (
                            <>
                              <span className="material-symbols-outlined text-lg">content_copy</span>
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="evolution" className="section-below-fold py-24 md:py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Evolution: From Veo 3.1 to <span className="text-primary">3.2</span>
              </h2>
              <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
                Google&apos;s Veo 3.1 introduced &quot;Ingredients to Video&quot;—turning reference images into expressive, high-quality clips with strong consistency. Veo 3.2 builds on that foundation with a leap in visual fidelity, creative control, and speed: from broadcast-ready quality to cinematic 8K, from ingredient-based workflows to director-level camera control, and from fast generation to real-time latency.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th scope="col" className="py-4 px-6 text-white/60 font-medium text-sm uppercase tracking-wider">Aspect</th>
                        <th scope="col" className="py-4 px-6 text-white/70 font-medium">Veo 3.1</th>
                        <th scope="col" className="py-4 px-6 text-primary font-medium">Veo 3.2</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-6 font-medium text-white/90">Visual Quality</td>
                        <td className="py-4 px-6">High quality · 1080p / 4K upscaling</td>
                        <td className="py-4 px-6 text-primary">Cinematic 8K (IMAX Standard)</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-6 font-medium text-white/90">Control</td>
                        <td className="py-4 px-6">Ingredients to Video · reference images</td>
                        <td className="py-4 px-6 text-primary">Directorial Control · precise camera movement</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium text-white/90">Speed</td>
                        <td className="py-4 px-6">Fast generation</td>
                        <td className="py-4 px-6 text-primary">Real-time latency (zero delay)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-below-fold py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Simple. Fast. <span className="text-primary">Stunning.</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Create professional-grade video content in three simple steps
                using our next-generation engine.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center group">
                <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    edit_note
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">1. Input Prompt</h3>
                <p className="text-white/50 leading-relaxed">
                  Type your vision in any language. Be as detailed or as simple
                  as you like—Veo understands nuance.
                </p>
              </div>
              <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center group">
                <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    memory
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">2. AI Processing</h3>
                <p className="text-white/50 leading-relaxed">
                  Our 3.2 engine processes frames in real-time, handling
                  physics, lighting, and textures with precision.
                </p>
              </div>
              <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center group">
                <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    download_done
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  3. Download Masterpiece
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Export your creation in up to 8K resolution, ready for film,
                  social media, or professional workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-below-fold py-32 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/40">
              Everything you need to know about the Veo 3.2 platform.
            </p>
          </div>
          <div className="space-y-4 faq-accordion">
            {[
              {
                question: "What is Veo 3.2?",
                answer:
                  "Veo 3.2 is an advanced AI model for both image and video generation. It converts text prompts into high-quality visuals using cutting-edge AI algorithms. This makes text-to-image and text-to-video creation fast and efficient.",
              },
              {
                question: "What are the key features of Veo 3.2?",
                answer:
                  "Veo 3.2 supports AI image generation, AI video generation, text-to-image, and text-to-video capabilities. It offers high-resolution output, motion consistency, and customizable style control. These features make it ideal for creative and commercial projects.",
              },
              {
                question: "How does Veo 3.2 differ from other AI models?",
                answer:
                  "Compared to other AI models, Veo 3.2 produces more realistic visuals and smoother video generation. Its advanced text-to-image and text-to-video algorithms ensure better style consistency and motion accuracy.",
              },
              {
                question: "Can I customize the style of the generated content?",
                answer:
                  "Yes, Veo 3.2 allows full style customization for both images and videos. Users can control visual elements, color tones, and motion effects to match their creative vision.",
              },
              {
                question: "How can I get started with Veo 3.2?",
                answer:
                  "To get started, sign up on the Veo platform and enter your text prompts. Veo 3.2 will generate AI images and videos quickly, ready for creative or commercial use.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <span className="text-lg font-medium">{item.question}</span>
                  <span className="material-symbols-outlined text-white/30 transition-transform duration-300 faq-icon">
                    add
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-20 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <a href="https://www.virax.ai/">
                <img
                  src="https://nxx81ahw5qktqjil.public.blob.vercel-storage.com/vlogo.png"
                  alt="Veo 3.2 Logo"
                  width={36}
                  height={36}
                  className="h-9 w-auto select-none drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]"
                />
              </a>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Veo32.ai empowers the next generation of storytellers with
              world-class artificial intelligence.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
          <p>© 2026 Veo Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              className="hover:text-white/40"
              href="https://www.virax.ai/"
              aria-label="Navigate to ViraX"
            >
              Terms
            </a>
            <a
              className="hover:text-white/40"
              href="https://www.virax.ai/"
              aria-label="Navigate to ViraX"
            >
              Privacy
            </a>
            <a
              className="hover:text-white/40"
              href="https://www.virax.ai/"
              aria-label="Navigate to ViraX"
            >
              Cookies
            </a>
          </div>
        </div>
      </footer>
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
