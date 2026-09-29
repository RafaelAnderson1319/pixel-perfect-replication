import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Orb, Reveal } from "./shared";

const TRUSTED = ["Google", "Microsoft", "airbnb", "HubSpot", "dribbble"];

export function Hero() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-16">
      <Orb className="-left-24 top-10 h-72 w-72 bg-[var(--periwinkle)]" />
      <Orb className="right-0 top-40 h-80 w-80 bg-[oklch(0.82_0.1_330)]" />

      <div className="glass relative overflow-hidden rounded-4xl p-6 sm:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          {/* Copy */}
          <Reveal className="min-w-0">
            <p className="label-eyebrow">Olá, eu sou</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Aarav Singh
            </h1>
            <p className="text-gradient mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
              Designer de Produto Digital
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              I craft meaningful digital experiences that are intuitive, beautiful and built with
              purpose.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Ver meus projetos <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-background"
              >
                Baixar currículo <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10">
              <p className="text-[11px] font-semibold text-muted-foreground">Confiam no meu trabalho</p>
              <ul className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-3 opacity-45">
                {TRUSTED.map((name) => (
                  <li key={name} className="text-lg font-semibold tracking-tight grayscale">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Portrait with floating glass cards */}
          <Reveal className="relative mx-auto w-full max-w-sm" delay={120}>
            <div className="glass-strong overflow-hidden rounded-4xl p-2">
              <img
                src={portrait}
                alt="Retrato de Aarav Singh"
                width={912}
                height={1104}
                className="h-full w-full rounded-[1.75rem] object-cover"
              />
            </div>

            {/* card de 5+ anos */}
            <div className="glass-strong absolute -right-2 -top-4 rounded-2xl px-4 py-3 text-center sm:-right-6">
              <p className="text-gradient text-2xl font-extrabold leading-none">5+</p>
              <p className="mt-1 text-[10px] font-semibold leading-tight text-muted-foreground">
                Anos de
                <br />
                Experiência
              </p>
            </div>

            {/* card de impacto do design */}
            <div className="glass-strong absolute -bottom-6 -right-2 w-40 rounded-2xl px-4 py-3 sm:-right-8">
              <p className="text-[10px] font-semibold text-muted-foreground">Impacto do design</p>
              <p className="text-base font-extrabold">+120%</p>
              <svg viewBox="0 0 100 32" className="mt-1 h-7 w-full" aria-hidden>
                <path
                  d="M2 28 L20 22 L34 25 L52 12 L70 16 L98 3"
                  fill="none"
                  stroke="var(--violet)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Sparkle badge */}
            <div className="glass-strong absolute -left-3 bottom-24 grid h-14 w-14 place-items-center rounded-full sm:-left-6">
              <Sparkles className="h-6 w-6 text-[var(--violet)]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
