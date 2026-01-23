export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/vlogo.png"
              alt="V logo"
              className="h-9 w-auto select-none drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]"
            />
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              href="#"
            >
              Features
            </a>
            <a
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              href="#"
            >
              Gallery
            </a>
            <a
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              href="#"
            >
              API
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-white/70 hover:text-white text-sm font-medium px-4">
              Log in
            </button>
            <button className="bg-white text-slate-900 hover:bg-white/90 text-sm font-bold px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_18px_rgba(148,163,184,0.45)]">
              Get Started
            </button>
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
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
              <source src="/herovideo2.mp4" type="video/mp4" />
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
              <div className="prompt-glow relative flex flex-col md:flex-row w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-3 rounded-2xl transition-all duration-500 shadow-2xl">
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
                <button className="generate-glow bg-white text-slate-900 hover:bg-white/90 font-bold px-12 py-6 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 group shadow-[0_0_25px_rgba(124,13,242,0.7)]">
                  <span className="text-lg">Try Veo 3.2 Now</span>
                  <span className="material-symbols-outlined transition-transform group-hover:rotate-12 text-slate-900">
                    bolt
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.15em] mr-4 font-bold">
                  Trending Styles:
                </span>
                <a
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all"
                  href="#"
                >
                  #Cyberpunk
                </a>
                <a
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all"
                  href="#"
                >
                  #StudioGhibli
                </a>
                <a
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all"
                  href="#"
                >
                  #HyperRealistic
                </a>
                <a
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all"
                  href="#"
                >
                  #Synthwave
                </a>
                <a
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all"
                  href="#"
                >
                  #AnamorphicShot
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-3">
                Community Showcase
              </h2>
              <p className="text-white/40">
                Real results generated by creators around the world.
              </p>
            </div>
            <div className="flex gap-2 bg-white/5 p-1.5 rounded-xl border border-white/5">
              <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-white px-6 transition-all shadow-[0_0_18px_rgba(148,163,184,0.35)]">
                <p className="text-slate-900 text-sm font-medium">Trending</p>
              </button>
              <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-transparent hover:bg-white/5 px-6 text-white/50 hover:text-white transition-all">
                <p className="text-sm font-medium">Cinematic</p>
              </button>
              <button className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-transparent hover:bg-white/5 px-6 text-white/50 hover:text-white transition-all">
                <p className="text-sm font-medium">3D Animation</p>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAksWp_fCFp8n4m-7lL-TKdY9rPzthB8U8J6ZsUwT8V3PdqWREH942ZGsFyCBJQwIg4_adxQkYhJMQv6D0O47DJE69_OXGUuDKQi20HkchYcdsocDfpNSYGR-yuHv0t-avx004tLwBxn9oYvZXjSTwyoxd-SveIcs4RmxZo197RutQzGrwUiemr-n7uVPLxPuyDG4puuCVQVwD8TG-TwSdaIeQAxUNuF2oO5-5fODEpH2LGu3wlcM81FxRD5Y52aXouqia92J0sxl8",
                label: ' "Bioluminescent fungi in a crystalline cave, neon turquoise glow, 8k"',
                badge: "Trending",
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjVHpf2v9nx1kP41BIFy6ay9ocP-DmfcBPKjkMrsDssRIl7DSeAXWEJLGAj7nYVrxx-EvtbZERjmQyz-zD702_MWAtGZYWr5lYqQUzTxkUhCPBHmwcqfyBMHS-UnjrqpEGQYjNZURAZbf1YDLVJDlBQYIBuHlxl_AyZgFhXD7ocSE_DBK2EY1lB976tlOujFrGtr5vzVgJ1EMltHxb-E55UemAdnPmRTDhhTQPl8A9Q4a0FSWqC36WDBzCYs9Yfr1ekcW62fDfFEM",
                label:
                  '"Avant-garde portrait of a woman made of floating liquid mercury"',
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHj0ydjDw7VknhZsyOoFAJ8_C3wK3bD497HkO8Rn81YYOJ4XLpyyAuZbBFBVRU-6eaaE1YdmlfCWOFIct-SoQw9MtdvZ45NV-ShiAQxdgQe3oimTXRiJP8CbxPt0wWYag_Spx7ljOiAHTO5ppJy8usCFR327NlrETbT4uKRDLOxTvHX8_SD97OiGd9lZs8MROmF8kUV8D2qNjKK0jC-Wh5kEGjaAH0yvdB8fy9YCZYmfdVabdCteCIhZ4oqf4HjyqR_g-JAO8BR3w",
                label:
                  '"Floating orbital station over a dying star, cinematic lighting"',
                badge: "Trending",
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOplgCryTv3CgBYD9AsPqNTVQESnNLecUc79hx7IoaGv5aVU5Qh30Ezyny0ZwMbcDHwiGcbf7qeI_tL9D1cpdvb71FnnPITSkr32oyjwXIpwslP21znar9Zf7OQk6MBbREJyyRNo4QTLALLvuOPys0byZAzpHASglDKn92O_uWOFARRC9c8uALD3Z8l_apj0KBe_1bU3W5hXGHXZR0CqFVaJqvPu2KUBRePVzasLULs4oByYz6O83vEs8Xs4dVW1jVDDF7aaTs3II",
                label:
                  '"Abstract dreamscape where clocks melt into golden desert sands"',
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkTkaR1gWt0AYRUBU0qMD9T4ezGt8Fuk888amcVjNBgNmlK88jBJ1F-7vbFwHDAbdHqq3qHSodJ7eR888It42w4dzOtEaAK3HUL-7XT3d6fbajVnK9YpL3sM630ltpexDNtbBoXLkb38gMGZeiHzLP-Elo9dyUxELghy-1gZJSG2xTtheQUv3cxCCJDfELg99mdcCPSqv5GWel-tPh5atb3vrPfvjAxV1YjT44UMKMx-pvOpMsQDfF2is54YrywfVwIoQVVnSJ7Tg",
                label:
                  '"Deep ocean jellyfish emitting iridescent pink pulses"',
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU9mgY2y9q91Z0bG_mpbTHpchE_szN6864OoWzxraCRUM8oDIXPz1knW19QZNFVcWYEo4NTEz1rgQteEGwKxnhxFzAMfWB35N3p19UjHs8jfpXv0eVMHJOT-FnetiPTm-nuN5I3xH0kQ_nibMyTjPX7kYk5iNJTHvezC4MmwbCKwW7jLapDGQcD4LYkATIY7NENKBXDVSgslbjlU9FVeQkhFQRdcV3XdRd3pPirAe35FeA3p-Y_UIVz4onLtQ0GfTeH2LFm8Zt3Kc",
                label:
                  '"The edge of a black hole bending light, interstellar accuracy"',
                badge: "Trending",
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjqLph788jtfobuS5NPq1s2bVxfKYDc80rGfYnQCbmOHBFpFu2i64X_vNLHY51i3-hH6C4F_WSYKdhdY-oaCiaEnme7KwCkvrP6o7CwAvgZ_ssjLyw6Wo73ILwZqGgT3eESGso4pzmu5SKWqd-AMmS5qh14xwd84_fU7rnXYIwvpOgJsbg6MC9r7z7JkYNyrXjoDaihGvyN78POjmnMjvAudZDOBeVyWX2UbLxp_kYZxQWzjRahlbW3npJ7kyOW4EdvW5q1ryhZh4",
                label:
                  '"A library where books are made of water, surrealism art"',
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkx3IywTz1FZ-JgfM9t44yqq2w7so-20eAa0SeGWZrxqbsNvFJVrZrB1IQLlIb4F4_koPcj7c8g1b1SxaPHcvLV74I9x6DP8mH27dzlvuA1j7d6MNxr1TvmevmjTKIeUOLyR7-jkVmYkJ-bgZof8PKiSmjXM1umIEmc4gfeo_eve9CvXWx_es2lnf7QhuyEx83RdW_DzJjta7kovI4fYGkKFjBp6tcO59ErabSyy8SoO1tMMVjZ6yVMQSSuIPVqw7_5ntK7d_l-G8",
                label:
                  '"Atmospheric landscape of a neon city in the clouds"',
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZiQp-TBOVucrRszRRhb9NAVhlMLPGV3F5WxBalquhNe4mGPI_5gc5D1GlMWv9-K3F8r_MSvIpjYZaRO7cv-lAmECXE0fxhDlrmuyhlKLP0aMXdu8wzn4A9V9YZLi3v7-PYIanrBEqxKLVnKXAXJGypMjL57AncPRsGyfTlWCfGh_cfb4L9-JsxpzgxLXdRgUjhCNye4Ai22kwZvgGyquTL1_AQp23tcrsqCEAbPjCllMJpUTGFTUKAFV076ZjTfQBU3Jmbj7fwbM",
                label:
                  '"The center of a galaxy visualized as a giant cosmic flower"',
                badge: "Trending",
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4jzwNr79TkaxmOJL5g4CcH6kq-yEv0w9vLzfvRJzrDj6APpVctezoWUgtcg9YDIrtWU-vDLgv4S8t8SPYxZmj6DGafZnpJWrhdG7js62hqLnLHDFxajQ6xkCEIkqisnI2lhgz2fcelilrHOqdqQSR87LcL_WUcx5ykzfBLjPS9m3DlZ-QX-JFGoJg14i1t8DcJmVOzHKDva1WHR33b3h7sAEdQ3vVaSPcmrAKEJwEOgYDXtcyMJOz39r9uAYJUAFHn1veUzan55E",
                label: '"Astronaut floating in a nebula of glowing particles"',
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBdvALpxstaPgWqEOjda74ttoNXdfuqQeWhTdXEswjIIAA-tZKbgdohUuZOiH44Z7iiNLP8FshK9GW7iKuO5wl3oOAg_JTsPsSz0QzY1vpckk_mqRcuGJpQZHMtYBCWmkWIub3w8HHM9xEPqAiiilaCUK7ahT7uRp45b_yL9NWb4v0pYbayy6iIVs_qgUQW28bF97rq7rMGsuq5oe4iGvSE1m5PQqssNh4x0PS3qkgqWh2BTCYJJSGX7j_sGbAg1R6fHz6X23ffTA",
                label:
                  '"Hyper-detailed macro of a robotic eye reflecting a jungle"',
              },
              {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPlVWH0XK9wATNj-PO2t2nX2m4DPZi7LbOsRJgtOlAiFzmsZ7E5A_UbH2hHo8_69jPMKgmnNDLPDoBBTHny94oq_Q2kuysPehp-ZAkhnEghVSql64iP5bJQ6GQTC-D1dkhlUx32EeC5H6gGmhk7b4FGGVcyVbcYZYMVDFiRcNlZOkt5JE7gF1ePRWKSEj903N6VE3WFM7U96v8rTD4UY5rPKFu3xsCy6ry_UM0boNz6Sly4fhMp9T8y9mVmqcaB7UtAqJCBRBh1YA",
                label:
                  '"Vibrant liquid gradients forming a sculptural mountain"',
                badge: "Trending",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.url}')` }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-white text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-[0_0_14px_rgba(148,163,184,0.55)]">
                      {item.badge}
                    </span>
                  )}
                  <p className="text-white text-xs font-medium line-clamp-2">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105 active:scale-95">
              Explore All Creations
            </button>
          </div>
        </section>

        <section className="py-32 px-6 relative overflow-hidden">
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

        <section className="py-32 px-6 max-w-4xl mx-auto">
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
                  "Veo 3.2 is our most advanced generative AI video engine yet. It utilizes high-dimensional latent diffusion models to create photorealistic and stylized video content up to 8K resolution from simple text or image prompts.",
              },
              {
                question: "How to start generating?",
                answer:
                  'Simply type your vision into the prompt box at the top of the page. You can describe scenes, camera movements, lighting, and style. Click "Generate" and watch your vision come to life in seconds.',
              },
              {
                question: "Supported video resolutions",
                answer:
                  "Veo 3.2 supports multiple aspect ratios (16:9, 9:16, 1:1, 21:9) and resolutions ranging from 1080p for quick previews up to native 8K cinematic masters for professional production workflows.",
              },
              {
                question: "Commercial usage rights",
                answer:
                  "Subscribers on our Pro and Enterprise plans hold full commercial rights to the videos they generate. This includes use in advertising, film, social media monetization, and corporate presentations.",
              },
              {
                question: "Pricing plans",
                answer:
                  "We offer three tiers: Creator (Free limited credits), Pro ($29/mo for unlimited 4K and commercial rights), and Enterprise (Custom pricing for 8K, API access, and dedicated support).",
              },
              {
                question: "API access",
                answer:
                  "Yes, our robust REST API is available for Enterprise users. It allows for programmatic generation, batch processing, and integration into existing creative software suites and production pipelines.",
              },
              {
                question: "Data privacy",
                answer:
                  "We take privacy seriously. Pro and Enterprise user data is never used to train our base models. All assets are encrypted at rest and in transit, and you maintain complete control over your private gallery.",
              },
              {
                question: "Community guidelines",
                answer:
                  "Our community is built on creativity and respect. We strictly prohibit the generation of deepfakes of real people, explicit content, or material that promotes hate speech. All public gallery submissions are moderated for compliance.",
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

      <footer className="border-t border-white/5 py-20 px-6 bg-black/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/vlogo.png"
                alt="V logo"
                className="h-9 w-auto select-none drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]"
              />
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Empowering the next generation of storytellers with world-class
              artificial intelligence.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <p className="text-white font-bold text-xs uppercase tracking-widest">
                Product
              </p>
              <a
                className="text-white/40 hover:text-white transition-colors text-sm"
                href="#"
              >
                Features
              </a>
              <a
                className="text-white/40 hover:text-white transition-colors text-sm"
                href="#"
              >
                API Docs
              </a>
              <a
                className="text-white/40 hover:text-white transition-colors text-sm"
                href="#"
              >
                Showcase
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white font-bold text-xs uppercase tracking-widest">
                Company
              </p>
              <a
                className="text-white/40 hover:text-white transition-colors text-sm"
                href="#"
              >
                About Us
              </a>
              <a
                className="text-white/40 hover:text-white transition-colors text-sm"
                href="#"
              >
                Blog
              </a>
              <a
                className="text-white/40 hover:text-white transition-colors text-sm"
                href="#"
              >
                Careers
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white font-bold text-xs uppercase tracking-widest">
                Connect
              </p>
              <div className="flex gap-4">
                <a
                  className="size-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">
                    brand_awareness
                  </span>
                </a>
                <a
                  className="size-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">hub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
          <p>© 2024 Veo Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white/40" href="#">
              Terms
            </a>
            <a className="hover:text-white/40" href="#">
              Privacy
            </a>
            <a className="hover:text-white/40" href="#">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
