import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Instagram } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Get Wrapped" },
    { name: "description", content: "Have a question or ready to start your next wrap project? Get in touch with Get Wrapped." },
    { property: "og:title", content: "Contact — Get Wrapped" },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact us"
        subtitle="Have a question or ready to start your next wrap project? Tell us about your vehicle, your vision, and your timeline — we're here to help bring it to life."
      />
      <section className="py-20">
        <div className="container-lux grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-accent p-10 text-center">
                <div className="font-display text-3xl text-white mb-3">Thanks — we'll be in touch.</div>
                <p className="text-white/70">We'll review your message and reply as soon as possible.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First name" name="first" required />
                  <Field label="Last name" name="last" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Message</label>
                  <textarea required rows={6} className="w-full bg-transparent border border-white/20 focus:border-accent outline-none px-4 py-3 text-white placeholder:text-white/30" placeholder="Tell us about your vehicle, project, and timeline…" />
                </div>
                <button type="submit" className="bg-white text-black px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
                  Submit
                </button>
              </form>
            )}
          </div>
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-accent mb-3">Follow</div>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-accent">
                <Instagram className="h-4 w-4" /> @getwrapped
              </a>
            </div>
            <div className="border-t border-white/10 pt-8">
              <div className="text-xs uppercase tracking-widest text-accent mb-3">Contact details</div>
              <p className="text-white/60 text-sm italic leading-relaxed">
                Phone, email, physical address and business hours aren't currently published on our site. Send a message through the form or reach out on Instagram and we'll follow up directly.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <div className="text-xs uppercase tracking-widest text-accent mb-3">Credentials</div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✳︎ Premium Quality</li>
                <li>✳︎ Certified Installers</li>
                <li>✳︎ Fully Licensed and Insured</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="w-full bg-transparent border border-white/20 focus:border-accent outline-none px-4 py-3 text-white" />
    </div>
  );
}