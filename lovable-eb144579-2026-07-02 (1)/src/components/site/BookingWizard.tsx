import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";

type Data = {
  subject?: string;
  year?: string;
  make?: string;
  model?: string;
  service?: string;
  scope?: string;
  addons: string[];
  timeline?: string;
  notes?: string;
  name?: string;
  phone?: string;
  email?: string;
};

const SUBJECTS = ["Personal Vehicle", "Commercial / Fleet Vehicle", "Motorcycle", "Other"];
const SERVICES: { id: string; label: string; desc?: string }[] = [
  { id: "printed", label: "Printed Commercial Wrap" },
  { id: "color", label: "Color Change Wrap" },
  { id: "accent", label: "Accent Wrap" },
  { id: "custom", label: "Custom Wrap Work" },
  { id: "tint", label: "Window Tint" },
  { id: "detail", label: "Detailing" },
  { id: "specialty", label: "Other / Not Sure" },
];
const SCOPES: Record<string, { id: string; label: string; desc?: string }[]> = {
  color: [
    { id: "partial", label: "Partial Wrap", desc: "Selected panels only" },
    { id: "full", label: "Full Wrap", desc: "Complete coverage" },
    { id: "unsure", label: "Not sure yet", desc: "We'll help you decide" },
  ],
  printed: [
    { id: "partial", label: "Partial Graphics", desc: "Logo or lettering" },
    { id: "full", label: "Full Commercial Wrap", desc: "Complete branded coverage" },
    { id: "unsure", label: "Not sure yet", desc: "We'll help you decide" },
  ],
  tint: [
    { id: "fronts", label: "Front Two Windows" },
    { id: "full", label: "All Windows" },
    { id: "unsure", label: "Not sure yet", desc: "We'll advise on options" },
  ],
};
const ADDONS = ["Chrome Delete", "Paint Protection Film", "Custom Design Work", "Detailing"];
const TIMELINES = ["ASAP", "Within 2 weeks", "Within 1 month", "Just exploring"];

export function BookingWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({ addons: [] });
  const [done, setDone] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Smoothly center the wizard on mount (e.g. arriving from a CTA link).
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const id = window.setTimeout(() => {
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    }, 220);
    return () => window.clearTimeout(id);
  }, [reduce]);

  const hasScope = data.service && SCOPES[data.service];
  const totalSteps = 5;

  const set = (patch: Partial<Data>) => setData((d) => ({ ...d, ...patch }));
  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const canContinue = () => {
    switch (step) {
      case 0: return !!data.subject && !!data.year && !!data.make && !!data.model;
      case 1: return !!data.service;
      case 2: return hasScope ? !!data.scope : true;
      case 3: return !!data.timeline;
      case 4: return !!data.name && !!data.email && !!data.phone;
      default: return false;
    }
  };

  if (done) {
    return (
      <div ref={wrapRef}>
        <Card>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-8"
          >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white mb-5">
            <Check className="h-7 w-7" />
          </div>
          <h3 className="font-display text-3xl text-white mb-3">Request received.</h3>
          <p className="text-white/70 max-w-md mx-auto">
            Thanks {data.name?.split(" ")[0]} — one of our specialists will follow up shortly with a tailored quote for your {data.year} {data.make} {data.model}.
          </p>
          </motion.div>
        </Card>
      </div>
    );
  }

  return (
    <div ref={wrapRef}>
    <Card>
      <div className="flex items-center justify-between mb-2">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Step {step + 1} of {totalSteps}</div>
        {step > 0 && (
          <button onClick={back} className="text-white/50 hover:text-accent text-xs inline-flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Back
          </button>
        )}
      </div>
      <Progress value={((step + 1) / totalSteps) * 100} />

      <div className="mt-8 relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && <StepSubject data={data} set={set} />}
            {step === 1 && <StepService data={data} set={set} />}
            {step === 2 && <StepScope data={data} set={set} hasScope={!!hasScope} />}
            {step === 3 && <StepTimeline data={data} set={set} />}
            {step === 4 && <StepContact data={data} set={set} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        disabled={!canContinue()}
        onClick={() => (step === totalSteps - 1 ? setDone(true) : next())}
        className="mt-8 w-full bg-white text-black py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.58_0.22_25_/_0.6)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {step === totalSteps - 1 ? "Request My Free Quote" : "Continue"}
      </button>
    </Card>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-xl"
    >
      <div className="absolute -inset-px bg-gradient-to-b from-accent/40 via-white/5 to-transparent pointer-events-none" />
      <div className="relative bg-neutral-950 border border-white/10 p-8 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">{children}</div>
    </motion.div>
  );
}

function Progress({ value }: { value: number }) {
  return (
    <div className="h-[2px] w-full bg-white/10 mt-3">
      <div className="h-full bg-accent transition-all duration-500" style={{ width: `${value}%` }} />
    </div>
  );
}

function H({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-display text-2xl md:text-3xl text-white">{children}</h3>
      {sub && <p className="text-white/50 text-sm mt-1">{sub}</p>}
    </div>
  );
}

function Tile({ active, onClick, title, desc }: { active: boolean; onClick: () => void; title: string; desc?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left p-4 border transition-all ${active ? "border-accent bg-accent/10" : "border-white/15 hover:border-white/40"}`}
    >
      <div className="text-white text-sm font-medium">{title}</div>
      {desc && <div className="text-white/50 text-xs mt-1">{desc}</div>}
    </button>
  );
}

function Input({ label, value, onChange, type = "text", placeholder }: { label: string; value?: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">{label}</label>
      <input
        type={type}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-white/15 focus:border-accent outline-none px-3 py-2.5 text-white text-sm placeholder:text-white/25"
      />
    </div>
  );
}

function StepSubject({ data, set }: { data: Data; set: (p: Partial<Data>) => void }) {
  const years = Array.from({ length: 30 }, (_, i) => String(new Date().getFullYear() + 1 - i));
  return (
    <>
      <H sub="Tell us what you're bringing in.">What type of project?</H>
      <div className="grid grid-cols-2 gap-3">
        {SUBJECTS.map((s) => (
          <Tile key={s} active={data.subject === s} onClick={() => set({ subject: s })} title={s} />
        ))}
      </div>
      <div className="border-t border-white/10 mt-6 pt-6">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">Vehicle details (if applicable)</div>
        <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Year</label>
          <select
            value={data.year ?? ""}
            onChange={(e) => set({ year: e.target.value })}
            className="w-full bg-transparent border border-white/15 focus:border-accent outline-none px-3 py-2.5 text-white text-sm"
          >
            <option value="" className="bg-black">Select year</option>
            {years.map((y) => <option key={y} value={y} className="bg-black">{y}</option>)}
          </select>
        </div>
        <Input label="Make" value={data.make} onChange={(v) => set({ make: v })} placeholder="e.g. BMW" />
        </div>
      </div>
      <div className="mt-3">
        <Input label="Model" value={data.model} onChange={(v) => set({ model: v })} placeholder="e.g. M4 Competition" />
      </div>
    </>
  );
}

function StepService({ data, set }: { data: Data; set: (p: Partial<Data>) => void }) {
  return (
    <>
      <H sub="Choose the service that fits your project.">Which service?</H>
      <div className="grid gap-3">
        {SERVICES.map((s) => (
          <Tile key={s.id} active={data.service === s.id} onClick={() => set({ service: s.id, scope: undefined })} title={s.label} desc={s.desc} />
        ))}
      </div>
    </>
  );
}

function StepScope({ data, set, hasScope }: { data: Data; set: (p: Partial<Data>) => void; hasScope: boolean }) {
  const scopes = data.service ? SCOPES[data.service] : undefined;
  const toggle = (a: string) => {
    const has = data.addons.includes(a);
    set({ addons: has ? data.addons.filter((x) => x !== a) : [...data.addons, a] });
  };
  return (
    <>
      <H sub={hasScope ? "You can refine this during design." : "Optional — add anything else we should include."}>
        {hasScope ? "Choose a size" : "Any add-ons?"}
      </H>
      {hasScope && scopes && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          {scopes.map((s) => (
            <Tile key={s.id} active={data.scope === s.id} onClick={() => set({ scope: s.id })} title={s.label} desc={s.desc} />
          ))}
        </div>
      )}
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">Add-ons (optional)</div>
      <div className="flex flex-wrap gap-2">
        {ADDONS.map((a) => {
          const active = data.addons.includes(a);
          return (
            <button
              key={a}
              type="button"
              onClick={() => toggle(a)}
              className={`px-3 py-2 text-xs border transition-colors ${active ? "border-accent bg-accent text-white" : "border-white/15 text-white/70 hover:border-white/40"}`}
            >
              {a}
            </button>
          );
        })}
      </div>
    </>
  );
}

function StepTimeline({ data, set }: { data: Data; set: (p: Partial<Data>) => void }) {
  return (
    <>
      <H sub="Helps us schedule your project.">When are you looking to get started?</H>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {TIMELINES.map((t) => (
          <Tile key={t} active={data.timeline === t} onClick={() => set({ timeline: t })} title={t} />
        ))}
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Anything else? (optional)</label>
        <textarea
          rows={4}
          value={data.notes ?? ""}
          onChange={(e) => set({ notes: e.target.value })}
          placeholder="Share colors, references, inspiration, or specific goals…"
          className="w-full bg-transparent border border-white/15 focus:border-accent outline-none px-3 py-2.5 text-white text-sm placeholder:text-white/25"
        />
      </div>
    </>
  );
}

function StepContact({ data, set }: { data: Data; set: (p: Partial<Data>) => void }) {
  return (
    <>
      <H sub="We'll be in touch within one business day.">Almost done — how do we reach you?</H>
      <div className="space-y-4">
        <Input label="Full Name" value={data.name} onChange={(v) => set({ name: v })} />
        <div className="grid grid-cols-2 gap-3">
          <Input label="Phone" type="tel" value={data.phone} onChange={(v) => set({ phone: v })} />
          <Input label="Email" type="email" value={data.email} onChange={(v) => set({ email: v })} />
        </div>
      </div>
    </>
  );
}