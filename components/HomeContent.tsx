"use client";

import { useState } from "react";
import { LazyVideo } from "@/components/LazyVideo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { translations, getNavFooterT } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

const trendingVideos = [
  "https://img.virax.ai/admin_videos/1770017472849_01ec5f2f-84fc-4eaf-a8bc-c2cbd31c5552_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017617978_1583324e-50b1-498e-a1ec-e39acf81d36b_hd.mp4",
  "https://img.virax.ai/admin_videos/1770020458854_1ae0bf2d-b906-4b7e-968d-d00f3dd27d97_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017548196_57a37114-90dc-4959-9280-0aa9544321e1_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017581626_5968b943-8be8-40bd-89d8-c31111bdc2f7_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017507462_5f0140c6-aa9f-4a85-b772-45d051043a55_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017528428_6fdcfaec-76af-4ad1-a962-ee6eb0878b5f_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017564580_860e3140-3def-412a-98b0-991342899d18_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017601564_9380d07f-2ef9-411c-95ea-09fb4c887916_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017636476_b1b480a6-b2a7-4751-abbf-eba85957ebd4_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017655739_b630e4b8-a0fa-45f6-a1bb-65ae7cc9ffe8_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017670869_c2f580b7-93ee-4b82-b68e-ded30bb23250_hd.mp4",
];

const cinematicVideos = [
  "https://img.virax.ai/admin_videos/1770019210209_0136bf9d-a9ec-49c8-896d-41ebdc98860d_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019233452_143a83d9-5731-45f6-a3cd-a26103fe334f_hd.mp4",
  "https://img.virax.ai/admin_videos/1770017548196_57a37114-90dc-4959-9280-0aa9544321e1_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019142991_5a7bd9ec-7c9b-4283-b6ea-7e256c392a56_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019172835_7fde102d-b42a-4553-b11e-4983cdac1460_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019253776_985aff0f-4024-4094-91be-ecb3080bfa8a_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019314473_a4ee3c2b-08f1-4304-a414-19c6e9c6a234_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019356146_a63744c8-1aa3-4f58-9aa0-1844100a28b2_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019337032_a7f8ec7f-0e99-4d57-baf5-eb7aa049ca34_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019372443_ba94a4eb-7348-4b66-9acf-3a784b39eeed_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019392406_be1f17b1-0dcb-4cd5-b215-99d52918d80c_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019420917_be55e554-062e-4364-b80c-735804f47e17_hd.mp4",
];

const animeVideos = [
  "https://img.virax.ai/admin_videos/1770019444529_0d83d5f4-f027-4461-bd4d-711befc65285_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019465380_0e904035-01ec-4ce4-9651-f86a8b9588c7_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019545501_2953ec82-a04a-4c57-8968-a748b51a2e36_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019482087_6b5f05bb-3ad4-4465-8aab-27affb44b2a7_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019524795_852f1be1-0ad3-4cc8-a5e0-6e32e23aa181_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019578562_8706e66f-2c70-473a-ae7b-94353ad2d1cb_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019510289_90f03655-7a25-4331-8ffd-211464176d86_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019596672_9133c40b-88c8-4d09-93e6-11be7a925849_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019496555_9a915c71-cae9-448d-8dd2-e36da4643b26_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019610979_a1163f7a-7aaf-4ec8-864d-705e9c42170b_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019625029_fb572d0d-c38c-4cdd-92e1-0b1b4a2bb1fe_hd.mp4",
  "https://img.virax.ai/admin_videos/1770019642808_fd33361c-5a1a-4e88-bbcb-930d76ba7766_hd.mp4",
];

type HomeContentProps = {
  locale: Locale;
};

export function HomeContent({ locale }: HomeContentProps) {
  const t = translations[locale];
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

  const navT = getNavFooterT(t);
  return (
    <>
      <SiteHeader t={navT} />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={t.aria.heroVideo}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
              <source src="https://img.virax.ai/admin_videos/1770014429013_herovideo2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 hero-video-overlay z-10" />
          </div>
          <div className="relative z-20 w-full max-w-5xl px-6 text-center">
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] md:leading-[1.05] mb-6 tracking-tighter text-center max-w-4xl mx-auto">
              {t.hero.titleOneLineBefore != null && t.hero.titleOneLineHighlight != null && t.hero.titleOneLineAfter != null ? (
                <span className="whitespace-nowrap">
                  <span className="text-white">{t.hero.titleOneLineBefore}</span>
                  <span className="italic bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent hero-title-glow-bright">
                    {t.hero.titleOneLineHighlight}
                  </span>
                  <span className="text-white">{t.hero.titleOneLineAfter}</span>
                </span>
              ) : (
                <>
                  <span className="block">{t.hero.titleLine1}</span>
                  <span className="block italic mt-2 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent hero-title-glow-bright">
                    {t.hero.titleLine2}
                  </span>
                </>
              )}
            </h1>
            <p className={`text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light leading-relaxed ${locale === "tw" ? "whitespace-nowrap" : ""}`}>
              {t.hero.subtitle}
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="prompt-glow relative flex flex-col md:flex-row w-full bg-white/[0.05] backdrop-blur-xl border border-white/10 p-3 rounded-2xl transition-colors duration-300 shadow-xl">
                <div className="flex flex-1 items-center px-6 py-6">
                  <span className="material-symbols-outlined text-primary mr-4 scale-125">auto_awesome</span>
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-white/20 text-xl font-light outline-none"
                    placeholder={t.hero.placeholder}
                    type="text"
                  />
                </div>
                <a
                  href="https://www.virax.ai/"
                  className="generate-glow bg-white text-slate-900 hover:bg-white/90 font-bold px-12 py-6 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 group shadow-[0_0_25px_rgba(124,13,242,0.7)]"
                >
                  <span className="text-lg">{t.hero.cta}</span>
                  <span className="material-symbols-outlined transition-transform group-hover:rotate-12 text-slate-900">bolt</span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.15em] mr-4 font-bold">
                  {t.hero.trendingStyles}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60" aria-label={t.aria.styleLabel("Cyberpunk")}>
                  {t.hero.styleCyberpunk}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60" aria-label={t.aria.styleLabel("Studio Ghibli")}>
                  {t.hero.styleGhibli}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60" aria-label={t.aria.styleLabel("Hyper Realistic")}>
                  {t.hero.styleHyperRealistic}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60" aria-label={t.aria.styleLabel("Synthwave")}>
                  {t.hero.styleSynthwave}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60" aria-label={t.aria.styleLabel("Anamorphic Shot")}>
                  {t.hero.styleAnamorphic}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="section-below-fold py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-3">{t.showcase.title}</h2>
              <p className="text-white/40">{t.showcase.subtitle}</p>
            </div>
            <div className="flex gap-2 bg-white/5 p-1.5 rounded-xl border border-white/5">
              <button
                onClick={() => setActiveTab("trending")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-6 transition-all ${
                  activeTab === "trending" ? "bg-white shadow-[0_0_18px_rgba(148,163,184,0.35)]" : "bg-transparent hover:bg-white/5"
                }`}
              >
                <p className={`text-sm font-medium ${activeTab === "trending" ? "text-slate-900" : "text-white/50 hover:text-white"}`}>{t.showcase.trending}</p>
              </button>
              <button
                onClick={() => setActiveTab("cinematic")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-6 transition-all ${
                  activeTab === "cinematic" ? "bg-white shadow-[0_0_18px_rgba(148,163,184,0.35)]" : "bg-transparent hover:bg-white/5"
                }`}
              >
                <p className={`text-sm font-medium ${activeTab === "cinematic" ? "text-slate-900" : "text-white/50 hover:text-white"}`}>{t.showcase.cinematic}</p>
              </button>
              <button
                onClick={() => setActiveTab("anime")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-6 transition-all ${
                  activeTab === "anime" ? "bg-white shadow-[0_0_18px_rgba(148,163,184,0.35)]" : "bg-transparent hover:bg-white/5"
                }`}
              >
                <p className={`text-sm font-medium ${activeTab === "anime" ? "text-slate-900" : "text-white/50 hover:text-white"}`}>{t.showcase.anime}</p>
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
                  ariaLabel={t.aria.showcaseVideo(index + 1, activeTab)}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-6">
                  <p className="text-white text-xs font-medium">{t.showcase.videoLabel(index + 1)}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="https://www.virax.ai/"
              className="inline-block px-10 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105 active:scale-95"
            >
              {t.showcase.exploreAll}
            </a>
          </div>
        </section>

        <section className="section-below-fold py-24 md:py-32 px-6 relative overflow-hidden min-h-screen flex flex-col justify-center">
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                {t.comparison.title}{" "}
                <span className="text-primary">{t.comparison.titleSuffix ?? "Veo 3.2"}</span>{" "}
                {t.comparison.titleEnd ?? ""}
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg">{t.comparison.subtitle}</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 md:px-6 text-sm font-semibold text-white/60 uppercase tracking-wider">
                      <h3 className="text-sm font-semibold uppercase tracking-wider m-0">{t.comparison.tableFeature}</h3>
                    </th>
                    <th className="py-4 px-4 md:px-6 text-sm font-semibold text-white bg-primary/10 border-l border-primary/20">
                      <h3 className="text-sm font-semibold m-0 flex items-center gap-2">
                        {t.comparison.tableVeo}
                        <span className="text-xs font-normal text-primary whitespace-nowrap">{t.comparison.tableVeoWinner}</span>
                      </h3>
                    </th>
                    <th className="py-4 px-4 md:px-6 text-sm font-semibold text-white/70">
                      <h3 className="text-sm font-semibold m-0">{t.comparison.tableSora}</h3>
                    </th>
                    <th className="py-4 px-4 md:px-6 text-sm font-semibold text-white/70">
                      <h3 className="text-sm font-semibold m-0">{t.comparison.tableRunway}</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  {t.comparison.rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                    >
                      <td className="py-3 md:py-4 px-4 md:px-6 font-medium text-white/80">{row.feature}</td>
                      <td className="py-3 md:py-4 px-4 md:px-6 text-white border-l border-primary/20 bg-primary/5">{row.veo}</td>
                      <td className="py-3 md:py-4 px-4 md:px-6 text-white/60">{row.sora}</td>
                      <td className="py-3 md:py-4 px-4 md:px-6 text-white/60">{row.runway}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 md:mt-20">
              <div className="glass-card p-8 rounded-2xl border-2 border-primary bg-primary/10 flex flex-col relative shadow-[0_0_0_1px_rgba(168,85,247,0.3),0_0_40px_rgba(168,85,247,0.25),0_0_80px_rgba(168,85,247,0.1)] ring-2 ring-primary/20 ring-offset-2 ring-offset-[#0f0a1f] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.5),0_0_50px_rgba(168,85,247,0.35),0_0_100px_rgba(168,85,247,0.15)]">
                <h3 className="text-xl font-bold mb-4 text-white">{t.comparison.cardVeoTitle}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{t.comparison.cardVeoBody}</p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✅</span> {t.comparison.cardVeo1}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✅</span> {t.comparison.cardVeo2}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✅</span> {t.comparison.cardVeo3}
                  </li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-white">{t.comparison.cardSoraTitle}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{t.comparison.cardSoraBody}</p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-white/60">✅</span> {t.comparison.cardSora1}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-white/60">✅</span> {t.comparison.cardSora2}
                  </li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-white">{t.comparison.cardRunwayTitle}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{t.comparison.cardRunwayBody}</p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="text-white/60">✅</span> {t.comparison.cardRunway1}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-white/60">✅</span> {t.comparison.cardRunway2}
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-white/70 max-w-3xl mx-auto mt-14 md:mt-16 text-lg leading-relaxed">{t.comparison.bottomParagraph}</p>

            <div className="flex justify-center mt-10">
              <a
                href="https://www.virax.ai/image2video"
                className="generate-glow inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-white/90 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(124,13,242,0.5)]"
              >
                {t.comparison.cta}
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        <section id="featured-prompts" className="min-h-screen py-24 md:py-32 px-6 relative overflow-hidden flex flex-col justify-center">
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                {t.featuredPrompts.title} <span className="text-primary">{t.featuredPrompts.titleSuffix ?? ""}</span>
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg">{t.featuredPrompts.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {t.featuredPrompts.prompts.map((item) => (
                <article
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-white/20 via-primary/30 to-white/10 shadow-xl"
                >
                  <div className="relative h-full rounded-2xl bg-slate-900/90 border border-white/5 p-0 flex flex-col">
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-900" aria-hidden>
                      <LazyVideo
                        src={item.videoUrl}
                        ariaLabel={t.aria.featuredPrompt(item.tag)}
                        className="absolute inset-0 h-full w-full object-cover"
                        preload="auto"
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
                          aria-label={copiedId === item.id ? t.featuredPrompts.copiedAria : t.featuredPrompts.copyAria}
                        >
                          {copiedId === item.id ? (
                            <>
                              <span className="material-symbols-outlined text-lg text-primary">check</span>
                              {t.featuredPrompts.copied}
                            </>
                          ) : (
                            <>
                              <span className="material-symbols-outlined text-lg">content_copy</span>
                              {t.featuredPrompts.copy}
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
                {t.evolution.title} <span className="text-primary">{t.evolution.titleSuffix ?? "3.2"}</span>
              </h2>
              <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">{t.evolution.subtitle}</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th scope="col" className="py-4 px-6 text-white/60 font-medium text-sm uppercase tracking-wider">
                          {t.evolution.aspect}
                        </th>
                        <th scope="col" className="py-4 px-6 text-white/70 font-medium">
                          {t.evolution.veo31}
                        </th>
                        <th scope="col" className="py-4 px-6 text-primary font-medium">
                          {t.evolution.veo32}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-6 font-medium text-white/90">{t.evolution.visualQuality}</td>
                        <td className="py-4 px-6">{t.evolution.visualQuality31}</td>
                        <td className="py-4 px-6 text-primary">{t.evolution.visualQuality32}</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-6 font-medium text-white/90">{t.evolution.control}</td>
                        <td className="py-4 px-6">{t.evolution.control31}</td>
                        <td className="py-4 px-6 text-primary">{t.evolution.control32}</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium text-white/90">{t.evolution.speed}</td>
                        <td className="py-4 px-6">{t.evolution.speed31}</td>
                        <td className="py-4 px-6 text-primary">{t.evolution.speed32}</td>
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
                {t.threeSteps.title} <span className="text-primary">{t.threeSteps.titleSuffix ?? ""}</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">{t.threeSteps.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center group">
                <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl">edit_note</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.threeSteps.step1Title}</h3>
                <p className="text-white/50 leading-relaxed">{t.threeSteps.step1Body}</p>
              </div>
              <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center group">
                <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl">memory</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.threeSteps.step2Title}</h3>
                <p className="text-white/50 leading-relaxed">{t.threeSteps.step2Body}</p>
              </div>
              <div className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center group">
                <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl">download_done</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.threeSteps.step3Title}</h3>
                <p className="text-white/50 leading-relaxed">{t.threeSteps.step3Body}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-below-fold py-32 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">{t.faq.title}</h2>
            <p className="text-white/40">{t.faq.subtitle}</p>
          </div>
          <div className="space-y-4 faq-accordion">
            {t.faq.items.map((item) => (
              <details key={item.question} className="glass-card rounded-2xl overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <span className="text-lg font-medium">{item.question}</span>
                  <span className="material-symbols-outlined text-white/30 transition-transform duration-300 faq-icon">add</span>
                </summary>
                <div className="px-6 pb-6 text-white/50 leading-relaxed border-t border-white/5 pt-4">{item.answer}</div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter t={navT} locale={locale} />
    </>
  );
}
