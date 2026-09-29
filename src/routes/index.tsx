import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Process, Services, Tools, Work } from "@/components/portfolio/Sections";
import { Contact, Footer, Testimonials } from "@/components/portfolio/Closing";

const TITLE = "Aarav Singh — Designer de Produto Digital";
const DESCRIPTION =
  "Portfólio de Aarav Singh, designer de produto digital criando experiências intuitivas e bonitas para web e mobile.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-4">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <Work />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
