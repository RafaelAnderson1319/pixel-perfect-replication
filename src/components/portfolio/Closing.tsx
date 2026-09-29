import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Quote,
  Send,
} from "lucide-react";
import { Logo } from "./Navbar";
import { Orb, Reveal, SectionHeading } from "./shared";

/* ---------------- Testimonials ---------------- */

const TESTIMONIALS = [
  {
    quote:
      "Aarav is an exceptional designer. He understands user needs deeply and delivers outstanding results on every project.",
    name: "Rohit Sharma",
    role: "Product Manager, Google",
    initials: "RS",
  },
  {
    quote:
      "Working with Aarav was a smooth and inspiring experience. His attention to detail is truly impressive.",
    name: "Neha Verma",
    role: "Design Lead, Microsoft",
    initials: "NV",
  },
  {
    quote:
      "Aarav's designs not only look amazing but also solve real user problems. Highly recommended!",
    name: "Karan Malhotra",
    role: "Founder, Startup",
    initials: "KM",
  },
];

export function Testimonials() {
  const [start, setStart] = useState(0);
  const total = TESTIMONIALS.length;
  const visible = [0, 1, 2].map((offset) => TESTIMONIALS[(start + offset) % total]!);

  return (
    <section id="testimonials" className="mx-auto w-full max-w-6xl px-4 pt-16">
      <Reveal className="glass rounded-4xl p-6 sm:p-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          action={
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setStart((s) => (s - 1 + total) % total)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary transition-colors hover:bg-background"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setStart((s) => (s + 1) % total)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary transition-colors hover:bg-background"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          }
        />
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {visible.map((item) => (
            <li key={item.name} className="glass-strong rounded-3xl p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <Quote className="h-4 w-4 shrink-0 text-[var(--violet)]" />
              </div>
              <div className="mt-6 flex min-w-0 items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tile-purple text-[11px] font-bold text-[var(--violet)]">
                  {item.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xs font-bold">{item.name}</span>
                  <span className="block truncate text-[11px] text-muted-foreground">
                    {item.role}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ---------------- Contact ---------------- */

const CONTACTS = [
  { icon: Mail, value: "hello@aaravsingh.design" },
  { icon: Phone, value: "+91 98765 43210" },
  { icon: MapPin, value: "New Delhi, India" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-4 pt-16">
      <Orb className="-bottom-10 right-0 h-72 w-72 bg-[oklch(0.78_0.12_300)]" />
      <Reveal className="glass relative overflow-hidden rounded-4xl p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="min-w-0">
            <p className="label-eyebrow">Let&apos;s connect</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Have a project in mind?
              <br />
              Let&apos;s create something amazing together.
            </h2>
            <ul className="mt-8 grid gap-4">
              {CONTACTS.map(({ icon: Icon, value }) => (
                <li key={value} className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-secondary">
                    <Icon className="h-4 w-4 text-[var(--violet)]" />
                  </span>
                  <span className="truncate text-xs text-muted-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="glass-strong grid gap-3 rounded-3xl p-5"
            onSubmit={(event) => {
              event.preventDefault();
              event.currentTarget.reset();
              setSent(true);
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Your Name"
                className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-xs outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-xs outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <select
              name="project"
              defaultValue=""
              className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-xs text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Your Project</option>
              <option>Product Design</option>
              <option>UI/UX Design</option>
              <option>Design System</option>
              <option>User Research</option>
            </select>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Your Message"
              className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-xs outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="text-center text-[11px] font-medium text-[var(--violet)]">
                Thanks! Your message has been noted.
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="glass grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <Logo className="h-9 w-9 rounded-lg text-xs" />
          <span className="truncate text-xs font-bold">Aarav Singh</span>
        </div>
        <p className="shrink-0 text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Aarav Singh
        </p>
      </div>
    </footer>
  );
}
