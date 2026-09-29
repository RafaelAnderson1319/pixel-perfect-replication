import {
  ArrowUpRight,
  Award,
  Briefcase,
  Compass,
  Layers,
  Lightbulb,
  PenTool,
  Repeat,
  Search,
  Smile,
  Sparkles,
  Target,
} from "lucide-react";
import workFinova from "@/assets/work-finova.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workSaas from "@/assets/work-saas.jpg";
import { ArrowCircle, Reveal, SectionHeading } from "./shared";

/* ---------------- About ---------------- */

const STATS = [
  { icon: Award, value: "5+", label: "Anos de experiência" },
  { icon: Briefcase, value: "30+", label: "Projetos concluídos" },
  { icon: Smile, value: "15+", label: "Clientes satisfeitos" },
];

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 pt-16">
      <Reveal className="glass rounded-4xl p-6 sm:p-10">
        <SectionHeading
          eyebrow="Sobre mim"
          title={
            <>
              Design com empatia
              <br />
              Construindo com propósito
            </>
          }
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="glass-strong rounded-3xl p-5">
            <ul className="grid gap-4 sm:grid-cols-3">
              {STATS.map(({ icon: Icon, value, label }) => (
                <li key={label} className="min-w-0">
                  <Icon className="h-4 w-4 text-[var(--violet)]" />
                  <p className="mt-3 text-xl font-extrabold">{value}</p>
                  <p className="text-[11px] text-muted-foreground">{label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I&apos;m a digital product designer with 5+ years of experience turning complex
              problems into simple, intuitive and engaging experiences. I believe in user-centered
              design, clean aesthetics and thoughtful details.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-3 text-[13px] font-semibold transition-colors hover:bg-background"
            >
              Mais sobre mim <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Services ---------------- */

const SERVICES = [
  {
    icon: Sparkles,
    tile: "bg-tile-orange",
    title: "Design de Produto",
    copy: "Criação de interfaces intuitivas e envolventes para produtos web e mobile.",
  },
  {
    icon: PenTool,
    tile: "bg-tile-purple",
    title: "Design UI/UX",
    copy: "Criação de experiências fluidas por meio de pesquisa, wireframes e prototipação.",
  },
  {
    icon: Layers,
    tile: "bg-tile-blue",
    title: "Sistemas de Design",
    copy: "Construção de sistemas de design escaláveis e bibliotecas de componentes para experiências consistentes.",
  },
  {
    icon: Search,
    tile: "bg-tile-teal",
    title: "Pesquisa com Usuários",
    copy: "Entendimento profundo dos usuários por meio de pesquisa e dados para orientar melhores decisões de design.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 pt-16">
      <Reveal>
        <SectionHeading eyebrow="O que eu faço" title="Serviços que ofereço" />
      </Reveal>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ icon: Icon, tile, title, copy }, i) => (
          <Reveal as="li" key={title} delay={i * 80} className="h-full">
            <article className="glass glass-hover flex h-full flex-col rounded-3xl p-5">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl ${tile}`}>
                <Icon className="h-5 w-5 text-[var(--violet)]" />
              </span>
              <h3 className="mt-5 text-base font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{copy}</p>
              <div className="mt-6 flex justify-end">
                <ArrowCircle />
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Tools & Skills ---------------- */

const TOOLS = [
  { name: "Figma", mark: "Fi", color: "text-[oklch(0.62_0.22_0)]" },
  { name: "Sketch", mark: "Sk", color: "text-[oklch(0.75_0.16_80)]" },
  { name: "Adobe XD", mark: "Xd", color: "text-[oklch(0.55_0.2_340)]" },
  { name: "Photoshop", mark: "Ps", color: "text-[oklch(0.55_0.17_240)]" },
  { name: "Illustrator", mark: "Ai", color: "text-[oklch(0.6_0.2_40)]" },
  { name: "Webflow", mark: "W", color: "text-[oklch(0.55_0.18_255)]" },
  { name: "Framer", mark: "F", color: "text-foreground" },
  { name: "Notion", mark: "N", color: "text-foreground" },
];

export function Tools() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-16">
      <Reveal className="glass rounded-4xl p-6 sm:p-10">
        <SectionHeading eyebrow="Ferramentas e habilidades" title="Tecnologias que uso" />
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {TOOLS.map((tool) => (
            <li
              key={tool.name}
              className="glass-strong glass-hover grid place-items-center gap-2 rounded-2xl px-2 py-4 text-center"
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-xl bg-background text-sm font-black ${tool.color}`}
              >
                {tool.mark}
              </span>
              <span className="text-[11px] font-medium text-muted-foreground">{tool.name}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ---------------- Selected Work ---------------- */

const PROJECTS = [
  { img: workFinova, title: "Finova – Aplicativo Financeiro", category: "Design de aplicativo mobile" },
  { img: workDashboard, title: "Dashboard de Analytics", category: "Aplicação web" },
  { img: workSaas, title: "Landing Page SaaS", category: "Design web" },
];

export function Work() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-4 pt-16">
      <Reveal>
        <SectionHeading
          eyebrow="Projetos em destaque"
          title="Projetos selecionados"
          action={
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2.5 text-[13px] font-semibold transition-colors hover:bg-background"
            >
              Ver todos os projetos <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          }
        />
      </Reveal>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal as="li" key={project.title} delay={i * 90}>
            <article className="glass glass-hover overflow-hidden rounded-3xl p-2">
              <img
                src={project.img}
                alt={`${project.title} prévia`}
                width={1024}
                height={768}
                loading="lazy"
                className="h-48 w-full rounded-[1.25rem] object-cover"
              />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-4">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold">{project.title}</h3>
                  <p className="truncate text-[11px] text-muted-foreground">{project.category}</p>
                </div>
                <ArrowCircle />
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Process ---------------- */

const STEPS = [
  { icon: Compass, n: "01", title: "Descobrir", copy: "Entender as necessidades dos usuários e os objetivos do projeto." },
  { icon: Target, n: "02", title: "Definir", copy: "Pesquisar, analisar e definir o problema." },
  {
    icon: Lightbulb,
    n: "03",
    title: "Idear",
    copy: "Fazer brainstorming e criar wireframes e conceitos.",
  },
  { icon: PenTool, n: "04", title: "Projetar", copy: "Criar interfaces limpas e intuitivas." },
  {
    icon: Repeat,
    n: "05",
    title: "Testar e Iterar",
    copy: "Testar com usuários e refinar para obter a melhor experiência.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto w-full max-w-6xl px-4 pt-16">
      <Reveal className="glass rounded-4xl p-6 sm:p-10">
        <SectionHeading eyebrow="Meu processo" title="Processo de design que sigo" />
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map(({ icon: Icon, n, title, copy }, i) => (
            <li key={n} className="relative">
              <div className="glass-strong glass-hover h-full rounded-3xl p-5">
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-[var(--violet)]" />
                  <span
                    className={
                      i === 0
                        ? "text-xl font-extrabold text-[var(--violet)]"
                        : "text-xl font-extrabold text-muted-foreground/40"
                    }
                  >
                    {n}
                  </span>
                </div>
                <h3 className="mt-5 text-sm font-bold">{title}</h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{copy}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-4 top-1/2 hidden h-px w-4 border-t border-dashed border-[var(--periwinkle)] lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
