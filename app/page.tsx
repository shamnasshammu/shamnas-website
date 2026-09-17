import Image from "next/image";

export default function Home() {
  const aboutCards = [
    {
      title: "Trading",
      description:
        "Sharpening discipline, patience, and decision-making through the markets.",
    },
    {
      title: "Building Startups",
      description:
        "Turning ideas into useful ventures with focus, speed, and long-term ambition.",
    },
    {
      title: "Creating Content",
      description:
        "Sharing lessons, stories, and the journey while building in public.",
    },
    {
      title: "Bigger Dreams",
      description:
        "Chasing growth that goes beyond comfort, location, and old limitations.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080b0c] text-white">
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <div className="text-xl font-bold tracking-wide">
          SHAMNAS
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#home" className="text-white transition hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Home
          </a>
          <a href="#about" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            About
          </a>
          <a href="#trading" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Trading
          </a>
          <a href="#projects" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Projects
          </a>
          <a href="#blog" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Blog
          </a>
          <a href="#contact" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/40 px-5 py-2 text-sm transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Let&apos;s Connect
        </a>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-6 pb-12 lg:grid-cols-2 lg:px-10"
      >
        {/* LEFT */}
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/55">
            Trader • Builder • Creative
          </p>

          <h1 className="max-w-2xl text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            Discipline
            <br />
            Builds
            <br />
            Freedom.
          </h1>

          <p className="mt-8 max-w-lg text-base leading-7 text-white/60">
            I&apos;m Mohammed Shamnas — a trader, entrepreneur and lifelong
            learner, building ideas, skills and businesses for a bigger
            tomorrow.
          </p>

          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Get to know me
            <span>→</span>
          </a>

          {/* STATS */}
          <div className="mt-16 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-semibold">3+</p>
              <p className="mt-1 text-xs text-white/45">
                Years Trading
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold">3</p>
              <p className="mt-1 text-xs text-white/45">
                Businesses
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold">∞</p>
              <p className="mt-1 text-xs text-white/45">
                Bigger Dreams
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT / HERO PORTRAIT */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#080b0c] lg:aspect-auto lg:h-[680px] lg:max-w-none">
          <Image
            src="/hero.png"
            alt="Mohammed Shamnas standing beside a car in a tailored suit"
            fill
            sizes="(min-width: 1280px) 580px, (min-width: 1024px) calc((100vw - 120px) / 2), (min-width: 624px) 576px, calc(100vw - 48px)"
            preload
            className="object-cover object-[60%_center]"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/10" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#080b0c]/85 via-transparent to-[#080b0c]/10" />

          <div className="absolute bottom-8 right-8 rotate-[-8deg] text-right font-serif text-2xl italic text-white/80 drop-shadow-lg sm:bottom-10 sm:right-10">
            a better
            <br />
            me everyday
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#f4efe6] text-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
              About Mohammed Shamnas
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Just a guy with big dreams.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/65 sm:text-lg">
              Mohammed Shamnas is a trader, entrepreneur, and builder from
              Kerala, India, focused on learning fast, creating meaningful
              work, and building a life shaped by discipline, freedom, and
              bigger possibilities.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aboutCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-black/10 bg-white/55 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] backdrop-blur"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 border-l border-black/20 pl-5 font-serif text-2xl italic leading-snug text-black/75 sm:text-3xl">
              &quot;A better version of myself, every single day.&quot;
            </blockquote>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-black/10 bg-[#111] shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:min-h-[560px] lg:min-h-[660px]">
            <Image
              src="/about.PNG"
              alt="Mohammed Shamnas seated on a stone bench in a garden"
              fill
              sizes="(min-width: 1280px) 552px, (min-width: 1024px) 45vw, calc(100vw - 48px)"
              className="object-cover object-[65%_40%]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 border-t border-white/10 pt-6">
              <p className="max-w-sm text-sm leading-6 text-white/85 drop-shadow-sm">
                Kerala roots. Global goals. Built one focused day at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TRADING */}
      <section
        id="trading"
        aria-labelledby="trading-heading"
        className="scroll-mt-8 bg-[#080b0c] text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-36">
          <div className="min-w-0">
            <p className="mb-6 text-xs font-medium text-white/50">TRADING</p>
            <h2
              id="trading-heading"
              className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Charts Teach.
              <br />
              Discipline Pays.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/60">
              I trade XAUUSD and major markets using price action, support and
              resistance, liquidity, and disciplined risk management. For me,
              trading is not just about making money — it is a process built
              around patience, discipline, and emotional control.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8">
              {[
                ["XAUUSD", "Primary Focus"],
                ["Price Action", "My Approach"],
                ["Risk Management", "Always"],
                ["Consistency", "The Goal"],
              ].map(([title, description]) => (
                <div key={title}>
                  <dt className="text-sm font-medium sm:text-base">{title}</dt>
                  <dd className="mt-2 text-xs text-white/45 sm:text-sm">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>

            <details className="group mt-10 max-w-lg">
              <summary className="flex w-fit cursor-pointer list-none items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <a href="#trading" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                  <span>Explore My Trading Journey</span>
                  <span aria-hidden="true" className="transition-transform group-open:rotate-90">→</span>
                </a>
              </summary>
              <div className="mt-6 border-l border-white/20 pl-5 text-sm leading-7 text-white/60">
                My journey is built one decision at a time: waiting for clear
                setups, defining risk before entering, and reviewing the outcome
                with honesty. The goal is to keep improving the process, even
                when a single trade does not go my way.
              </div>
            </details>
          </div>

          <div
            role="img"
            aria-label="Illustrative monochrome candlestick chart with support and resistance levels. Process leads to results."
            className="relative isolate aspect-[1/1] min-w-0 overflow-hidden sm:aspect-[1.1/1] lg:aspect-[1/1.12]"
          >
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]" />
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/[0.025] to-transparent" />
              <div className="absolute inset-x-5 top-7 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[10px] text-white/40 sm:inset-x-8 sm:text-xs">
                <span className="text-white/70">XAUUSD / GOLD</span>
                <span>PRICE ACTION · 4H</span>
              </div>

              <div className="absolute inset-x-5 top-[30%] border-t border-dashed border-white/20 sm:inset-x-8">
                <span className="absolute right-0 -top-5 font-mono text-[9px] text-white/35">RESISTANCE</span>
              </div>
              <div className="absolute inset-x-5 top-[68%] border-t border-dashed border-white/15 sm:inset-x-8">
                <span className="absolute right-0 top-2 font-mono text-[9px] text-white/35">SUPPORT</span>
              </div>

              <div className="absolute inset-x-8 bottom-[24%] top-[22%] flex items-start justify-between gap-1 sm:inset-x-12 sm:gap-2">
                {[
                  [64, 22, 10, true], [55, 27, 12, true],
                  [49, 22, 8, false], [56, 20, 9, false],
                  [47, 30, 16, true], [38, 24, 10, true],
                  [32, 22, 8, false], [39, 28, 13, false],
                  [50, 24, 10, false], [54, 25, 11, true],
                  [43, 28, 15, true], [31, 26, 13, true],
                  [24, 20, 8, false], [29, 24, 12, true],
                  [17, 28, 15, true], [10, 22, 9, true],
                  [14, 18, 6, false], [6, 24, 12, true],
                ].map(([top, wick, body, rising], index) => (
                  <div
                    key={index}
                    className="relative h-full flex-1"
                  >
                    <div
                      className="absolute left-1/2 w-px -translate-x-1/2 bg-white/35"
                      style={{ top: `${top}%`, height: `${wick}%` }}
                    />
                    <div
                      className={`absolute inset-x-[15%] border ${rising ? "border-white/65 bg-white/65" : "border-white/35 bg-[#080b0c]"}`}
                      style={{
                        top: `${Number(top) + (Number(wick) - Number(body)) / 2}%`,
                        height: `${body}%`,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="absolute inset-x-8 bottom-[15%] flex h-[9%] items-end justify-between gap-1 opacity-20 sm:inset-x-12 sm:gap-2">
                {[25, 40, 30, 55, 75, 45, 35, 65, 50, 80, 60, 90, 45, 65, 95, 70, 50, 85].map((height, index) => (
                  <div key={index} className="flex-1 bg-white/40" style={{ height: `${height}%` }} />
                ))}
              </div>
              <p className="absolute bottom-4 right-5 -rotate-6 font-serif text-2xl italic text-white/60 sm:bottom-6 sm:right-8 sm:text-3xl">
                Process → Results
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="scroll-mt-8 bg-[#f4efe6] text-black"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-8 lg:px-10 lg:py-24">
          <div className="min-w-0 lg:pt-6">
            <p className="mb-6 text-xs font-semibold text-black/45">PROJECTS</p>
            <h2
              id="projects-heading"
              className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Ideas into
              <br />
              Real Solutions.
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-black/65">
              I&apos;m building ventures focused on solving real problems and
              creating long-term value. Here are some of the projects I&apos;m
              building and proud to be part of.
            </p>
            <a
              href="#project-grid"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#303030] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              View All Projects <span aria-hidden="true">→</span>
            </a>
          </div>

          <div
            id="project-grid"
            tabIndex={-1}
            aria-label="All projects"
            className="grid min-w-0 scroll-mt-8 gap-4 sm:grid-cols-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <svg aria-hidden="true" width="0" height="0" className="absolute pointer-events-none">
              <defs>
                <filter id="project-logo-transparency" colorInterpolationFilters="sRGB">
                  <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -8 4 4 0 0" />
                </filter>
              </defs>
            </svg>
            {[
              {
                name: "PotUp",
                category: "GOAL-BASED SAVING",
                description: "A goal-based savings platform built to help people save with purpose and stay committed to what matters.",
                detail: "The idea is to make a savings goal the starting point, giving everyday saving a clear purpose and direction.",
                theme: "border-[#244737]/15 bg-[#e2eae2] text-[#193c2c] hover:border-[#244737]/35",
                logo: "/potup-logo.png",
                logoTheme: "h-[102px]",
                comingSoon: false,
              },
              {
                name: "StoneBridge Fund Management",
                category: "FUND MANAGEMENT",
                description: "A disciplined fund management venture focused on risk, process, capital protection, and long-term growth.",
                detail: "Risk awareness, a consistent process, and capital protection guide the venture's approach to long-term growth.",
                theme: "border-white/10 bg-linear-to-br from-[#242f38] to-[#151b21] text-[#f4efe6] hover:border-white/30",
                logo: "/stonebridge-logo.png",
                logoTheme: "h-[90px]",
                comingSoon: false,
              },
              {
                name: "CarryLink",
                category: "PEOPLE-POWERED DELIVERY",
                description: "A delivery concept designed to connect people, packages, and journeys in a smarter way.",
                detail: "Exploring how journeys people are already making could help connect someone sending an item with someone traveling in that direction.",
                theme: "border-[#0b7777]/15 bg-[#f1f7f9] text-[#092f43] hover:border-[#0b7777]/35",
                logo: "/carrylink-logo.png",
                logoTheme: "h-[92px] [filter:url(#project-logo-transparency)]",
                comingSoon: false,
              },
              {
                name: "Hash Eye",
                category: "COMING SOON",
                description: "A new idea is taking shape.",
                detail: null,
                theme: "border-[#c88950]/20 bg-[#111111] text-[#f4efe6] hover:border-[#c88950]/45",
                logo: "/hasheye-logo.png",
                logoTheme: "h-20 brightness-0 invert opacity-85",
                comingSoon: true,
              },
            ].map((project) => (
              <article
                key={project.name}
                className={`group flex min-w-0 flex-col rounded-lg border px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)] motion-reduce:transform-none motion-reduce:transition-none ${project.theme}`}
              >
                <div className="mb-3 flex h-[90px] items-center">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={project.name === "CarryLink" ? 1586 : 1600}
                    height={project.name === "CarryLink" ? 992 : 1000}
                    sizes="144px"
                    className={`w-auto max-w-full object-contain ${project.logoTheme}`}
                  />
                </div>
                <p className={`mb-2 text-[10px] font-medium ${project.comingSoon ? "text-[#d99a62]" : "opacity-55"}`}>{project.category}</p>
                <h3 className="text-xl font-semibold leading-tight">{project.name}</h3>
                <p className="mb-4 mt-2 text-sm leading-6 opacity-70">{project.description}</p>
                {project.comingSoon ? (
                  <p className="mt-auto border-t border-[#c88950]/50 pt-3 text-sm font-medium text-[#d99a62] shadow-[0_-3px_10px_-5px_rgba(200,137,80,0.35)]">Coming Soon</p>
                ) : (
                <details className="mt-auto border-t border-current/15 pt-3">
                  <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current [&::-webkit-details-marker]:hidden">
                    Learn more <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 opacity-70">{project.detail}</p>
                </details>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* JOURNAL */}
      <section
        id="blog"
        aria-labelledby="journal-heading"
        className="scroll-mt-8 bg-[#f4efe6] text-black"
      >
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-28 lg:px-10 lg:pb-32">
          <div className="border-t border-black/10 pt-16 sm:pt-20">
            <p className="mb-6 text-xs font-semibold text-black/45">JOURNAL</p>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <h2
                  id="journal-heading"
                  className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
                >
                  Thoughts,
                  <br />
                  Learnings &amp; More.
                </h2>
                <p className="mt-7 max-w-xl text-base leading-8 text-black/65">
                  Sharing my journey, ideas, lessons, experiments, and everything
                  in between.
                </p>
              </div>
              <a
                href="#journal-posts"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#303030] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                View All Posts <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div
            id="journal-posts"
            tabIndex={-1}
            aria-label="All journal posts"
            className="mt-12 grid scroll-mt-8 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            {[
              {
                category: "TRADING",
                title: "Discipline in Trading: What I've Learned",
                description: "Lessons from the markets about patience, risk, psychology, and consistency.",
                preview: "The markets keep reminding me that patience is an active decision. Defining risk and reviewing my decisions matter more than chasing the next move. Consistency starts with the habits I bring to each session.",
                visual: "trading",
                background: "bg-[#141819]",
              },
              {
                category: "BUSINESS",
                title: "Why I'm Building PotUp",
                description: "The thinking behind turning goal-based saving into a useful financial product.",
                preview: "PotUp starts with a simple question: what if saving began with something you actually wanted to achieve? I'm exploring how clear goals could make the experience more purposeful, and how to turn that idea into a useful product.",
                visual: "business",
                background: "bg-[#dfe5df]",
              },
              {
                category: "LIFE",
                title: "A Better Me Everyday",
                description: "Thoughts on discipline, growth, ambition, and becoming better one day at a time.",
                preview: "I think about growth as a daily practice: learning something, showing up for the work, and making time to reflect. Bigger ambitions give me direction, but small actions are what move me forward.",
                visual: "life",
                background: "bg-[#d9e1e3]",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="group flex min-w-0 flex-col transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div
                  role="img"
                  aria-label={`${post.category.toLowerCase()} image placeholder`}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg ${post.background}`}
                >
                  <div aria-hidden="true" className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none">
                    {post.visual === "trading" && (
                      <>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[36px_36px]" />
                        <div className="absolute inset-x-[15%] bottom-[24%] top-[24%] flex items-center justify-between gap-3">
                          {[35, 55, 40, 70, 50, 80, 60].map((height, index) => (
                            <div key={index} className="relative w-3 border border-white/40 bg-white/15" style={{ height: `${height}%`, transform: `translateY(${20 - index * 6}px)` }}>
                              <span className="absolute -bottom-3 -top-3 left-1/2 w-px bg-white/30" />
                            </div>
                          ))}
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      </>
                    )}
                    {post.visual === "business" && (
                      <>
                        <div className="absolute -bottom-[12%] left-[10%] h-[65%] w-[80%] -rotate-12 border border-[#224934]/15 bg-[#eef1eb] shadow-[0_12px_25px_rgba(0,0,0,0.08)]" />
                        <div className="absolute left-[27%] top-[18%] h-[65%] w-[48%] rotate-6 rounded-lg border border-[#224934]/15 bg-[#f7f8f3] p-5 shadow-[0_12px_25px_rgba(0,0,0,0.08)]">
                          <div className="h-1.5 w-1/2 bg-[#224934]/25" />
                          <div className="mt-3 h-1 w-3/4 bg-[#224934]/10" />
                          <div className="mt-6 flex h-16 items-end gap-2 border-b border-[#224934]/15 pb-2">
                            <span className="h-1/3 flex-1 bg-[#224934]/20" />
                            <span className="h-2/3 flex-1 bg-[#224934]/40" />
                            <span className="h-full flex-1 bg-[#224934]/65" />
                          </div>
                        </div>
                      </>
                    )}
                    {post.visual === "life" && (
                      <>
                        <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[#aabbb3] [clip-path:polygon(0_65%,35%_10%,65%_55%,100%_0,100%_100%,0_100%)]" />
                        <div className="absolute inset-x-0 bottom-0 h-[36%] bg-[#667d74] [clip-path:polygon(0_40%,25%_70%,65%_5%,100%_55%,100%_100%,0_100%)]" />
                        <div className="absolute bottom-0 left-[40%] h-[25%] w-[28%] bg-[#e5e5dc] [clip-path:polygon(45%_0,55%_0,100%_100%,0_100%)]" />
                      </>
                    )}
                  </div>
                  <span aria-hidden="true" className={`absolute bottom-4 left-5 text-[10px] font-medium ${post.visual === "trading" || post.visual === "life" ? "text-white/65" : "text-black/45"}`}>
                    IMAGE TO COME
                  </span>
                </div>
                <p className="mt-6 text-[10px] font-semibold text-black/45">{post.category}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug">{post.title}</h3>
                <p className="mb-6 mt-3 text-sm leading-7 text-black/60">{post.description}</p>
                <details className="mt-auto border-t border-black/15 pt-4">
                  <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black [&::-webkit-details-marker]:hidden">
                    Read article <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                  </summary>
                  <div className="mt-4">
                    <p className="text-xs font-medium text-black/45">Draft preview</p>
                    <p className="mt-2 text-sm leading-7 text-black/65">{post.preview}</p>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-8 bg-[#080b0c] text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-32">
          <div className="min-w-0">
            <p className="mb-6 text-xs font-medium text-white/50">CONTACT</p>
            <h2 id="contact-heading" className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Let&apos;s Build
              <br />
              Something Great.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/60">
              Got an idea, opportunity, collaboration, or just want to say hi?
              <br />
              I&apos;m always open to meaningful conversations.
            </p>

            <div className="mt-10 grid gap-3">
              {[
                { label: "Email", value: "shamnasofficial1@gmail.com", href: "mailto:shamnasofficial1@gmail.com", external: false },
                { label: "Instagram", value: "@justshammu", href: "https://www.instagram.com/justshammu/", external: true },
                { label: "Location", value: "Kerala, India", href: null, external: false },
              ].map((item) => (
                <div key={item.label} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-5 py-4">
                  <div>
                    <p className="text-xs text-white/45">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="mt-1 inline-block break-all text-base transition hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Let&apos;s Connect <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="relative isolate aspect-[4/5] min-w-0 overflow-hidden rounded-lg border border-white/10 bg-[#111516] sm:aspect-square lg:aspect-[4/5]">
            <Image
              src="/contact.PNG"
              alt="Mohammed Shamnas seated in an office wearing a suit and sunglasses"
              fill
              sizes="(min-width: 1280px) 568px, (min-width: 1024px) calc((100vw - 144px) / 2), calc(100vw - 48px)"
              className="object-cover object-[center_20%]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#080b0c]/65 via-transparent to-[#080b0c]/20" />
            <p className="absolute right-6 top-[16%] -rotate-6 font-serif text-2xl italic leading-snug text-white/80 drop-shadow-lg sm:right-8 sm:text-3xl">
              Same Dreams.
              <br />
              Bigger Plans.
            </p>
            <p className="absolute bottom-8 left-8 font-serif text-xl italic leading-snug text-white/65 drop-shadow-lg">
              Good Ideas.
              <br />
              Better Days.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#080b0c] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 border-t border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <a href="#home" className="text-2xl font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">SHAMNAS</a>
              <p className="mt-4 text-[10px] text-white/40">TRADER • BUILDER • CREATIVE</p>
              <p className="mt-6 max-w-xs font-serif text-lg italic leading-7 text-white/60">A better version of myself, everyday.</p>
            </div>
            <nav aria-label="Footer quick links">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/50">
                {[
                  ["Home", "home"], ["About", "about"],
                  ["Trading", "trading"], ["Projects", "projects"],
                  ["Journal", "blog"], ["Contact", "contact"],
                ].map(([label, id]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="text-sm font-medium">Follow Me</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/40">
                {["Instagram", "YouTube", "LinkedIn", "X"].map((platform) => (
                  <li key={platform}>
                    {platform === "Instagram" ? (
                      <a href="https://www.instagram.com/justshammu/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{platform}</a>
                    ) : (
                      <span aria-disabled="true" title={`${platform} profile link not available`}>{platform}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Shamnas. All rights reserved.</p>
            <div className="flex gap-6">
              <span title="Privacy policy coming soon">Privacy</span>
              <span title="Terms coming soon">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
