import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Instagram } from "lucide-react";
import { site } from "@/data/site";
import { BookingWizard } from "@/components/site/BookingWizard";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Get Wrapped" },
    { name: "description", content: "Have a question or ready to start your next wrap project? Get in touch with Get Wrapped." },
    { property: "og:title", content: "Contact — Get Wrapped" },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container-lux">
          <BookingWizard />
          <div className="mt-14 grid gap-8 md:grid-cols-3 text-center border-t border-white/10 pt-10 max-w-3xl mx-auto">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Follow</div>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-accent text-sm">
                <Instagram className="h-4 w-4" /> @getwrapped
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Response Time</div>
              <div className="text-white/80 text-sm">Within 1 business day</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Credentials</div>
              <div className="text-white/80 text-sm">Certified · Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}