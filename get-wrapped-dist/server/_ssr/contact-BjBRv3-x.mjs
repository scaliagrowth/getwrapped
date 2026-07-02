import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Check, r as Instagram, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as Layout, s as site } from "./Layout-ZfQE0po9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BjBRv3-x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUBJECTS = [
	"Personal Vehicle",
	"Commercial / Fleet Vehicle",
	"Motorcycle",
	"Other"
];
var SERVICES = [
	{
		id: "printed",
		label: "Printed Commercial Wrap"
	},
	{
		id: "color",
		label: "Color Change Wrap"
	},
	{
		id: "accent",
		label: "Accent Wrap"
	},
	{
		id: "custom",
		label: "Custom Wrap Work"
	},
	{
		id: "tint",
		label: "Window Tint"
	},
	{
		id: "detail",
		label: "Detailing"
	},
	{
		id: "specialty",
		label: "Other / Not Sure"
	}
];
var SCOPES = {
	color: [
		{
			id: "partial",
			label: "Partial Wrap",
			desc: "Selected panels only"
		},
		{
			id: "full",
			label: "Full Wrap",
			desc: "Complete coverage"
		},
		{
			id: "unsure",
			label: "Not sure yet",
			desc: "We'll help you decide"
		}
	],
	printed: [
		{
			id: "partial",
			label: "Partial Graphics",
			desc: "Logo or lettering"
		},
		{
			id: "full",
			label: "Full Commercial Wrap",
			desc: "Complete branded coverage"
		},
		{
			id: "unsure",
			label: "Not sure yet",
			desc: "We'll help you decide"
		}
	],
	tint: [
		{
			id: "fronts",
			label: "Front Two Windows"
		},
		{
			id: "full",
			label: "All Windows"
		},
		{
			id: "unsure",
			label: "Not sure yet",
			desc: "We'll advise on options"
		}
	]
};
var ADDONS = [
	"Chrome Delete",
	"Paint Protection Film",
	"Custom Design Work",
	"Detailing"
];
var TIMELINES = [
	"ASAP",
	"Within 2 weeks",
	"Within 1 month",
	"Just exploring"
];
function BookingWizard() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [data, setData] = (0, import_react.useState)({ addons: [] });
	const [done, setDone] = (0, import_react.useState)(false);
	const wrapRef = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el) return;
		const id = window.setTimeout(() => {
			el.scrollIntoView({
				behavior: reduce ? "auto" : "smooth",
				block: "center"
			});
		}, 220);
		return () => window.clearTimeout(id);
	}, [reduce]);
	const hasScope = data.service && SCOPES[data.service];
	const totalSteps = 5;
	const set = (patch) => setData((d) => ({
		...d,
		...patch
	}));
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
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .96
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			transition: {
				duration: .5,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "text-center py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white mb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl text-white mb-3",
					children: "Request received."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-white/70 max-w-md mx-auto",
					children: [
						"Thanks ",
						data.name?.split(" ")[0],
						" — one of our specialists will follow up shortly with a tailored quote for your ",
						data.year,
						" ",
						data.make,
						" ",
						data.model,
						"."
					]
				})
			]
		}) })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[10px] uppercase tracking-[0.2em] text-white/50",
					children: [
						"Step ",
						step + 1,
						" of ",
						totalSteps
					]
				}), step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: back,
					className: "text-white/50 hover:text-accent text-xs inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" }), " Back"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: (step + 1) / totalSteps * 100 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					initial: false,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 24
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -24
						},
						transition: {
							duration: .35,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepSubject, {
								data,
								set
							}),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepService, {
								data,
								set
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepScope, {
								data,
								set,
								hasScope: !!hasScope
							}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTimeline, {
								data,
								set
							}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepContact, {
								data,
								set
							})
						]
					}, step)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				disabled: !canContinue(),
				onClick: () => step === totalSteps - 1 ? setDone(true) : next(),
				className: "mt-8 w-full bg-white text-black py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.58_0.22_25_/_0.6)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black disabled:hover:translate-y-0 disabled:hover:shadow-none",
				children: step === totalSteps - 1 ? "Request My Free Quote" : "Continue"
			})
		] })
	});
}
function Card({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 24,
			scale: .98
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "relative mx-auto max-w-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px bg-gradient-to-b from-accent/40 via-white/5 to-transparent pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative bg-neutral-950 border border-white/10 p-8 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]",
			children
		})]
	});
}
function Progress({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[2px] w-full bg-white/10 mt-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-accent transition-all duration-500",
			style: { width: `${value}%` }
		})
	});
}
function H({ children, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl md:text-3xl text-white",
			children
		}), sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-white/50 text-sm mt-1",
			children: sub
		})]
	});
}
function Tile({ active, onClick, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `text-left p-4 border transition-all ${active ? "border-accent bg-accent/10" : "border-white/15 hover:border-white/40"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-white text-sm font-medium",
			children: title
		}), desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-white/50 text-xs mt-1",
			children: desc
		})]
	});
}
function Input({ label, value, onChange, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		value: value ?? "",
		placeholder,
		onChange: (e) => onChange(e.target.value),
		className: "w-full bg-transparent border border-white/15 focus:border-accent outline-none px-3 py-2.5 text-white text-sm placeholder:text-white/25"
	})] });
}
function StepSubject({ data, set }) {
	const years = Array.from({ length: 30 }, (_, i) => String((/* @__PURE__ */ new Date()).getFullYear() + 1 - i));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
			sub: "Tell us what you're bringing in.",
			children: "What type of project?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3",
			children: SUBJECTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
				active: data.subject === s,
				onClick: () => set({ subject: s }),
				title: s
			}, s))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-white/10 mt-6 pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3",
				children: "Vehicle details (if applicable)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2",
					children: "Year"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: data.year ?? "",
					onChange: (e) => set({ year: e.target.value }),
					className: "w-full bg-transparent border border-white/15 focus:border-accent outline-none px-3 py-2.5 text-white text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						className: "bg-black",
						children: "Select year"
					}), years.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: y,
						className: "bg-black",
						children: y
					}, y))]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					label: "Make",
					value: data.make,
					onChange: (v) => set({ make: v }),
					placeholder: "e.g. BMW"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "Model",
				value: data.model,
				onChange: (v) => set({ model: v }),
				placeholder: "e.g. M4 Competition"
			})
		})
	] });
}
function StepService({ data, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
		sub: "Choose the service that fits your project.",
		children: "Which service?"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3",
		children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
			active: data.service === s.id,
			onClick: () => set({
				service: s.id,
				scope: void 0
			}),
			title: s.label,
			desc: s.desc
		}, s.id))
	})] });
}
function StepScope({ data, set, hasScope }) {
	const scopes = data.service ? SCOPES[data.service] : void 0;
	const toggle = (a) => {
		set({ addons: data.addons.includes(a) ? data.addons.filter((x) => x !== a) : [...data.addons, a] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
			sub: hasScope ? "You can refine this during design." : "Optional — add anything else we should include.",
			children: hasScope ? "Choose a size" : "Any add-ons?"
		}),
		hasScope && scopes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 mb-6",
			children: scopes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
				active: data.scope === s.id,
				onClick: () => set({ scope: s.id }),
				title: s.label,
				desc: s.desc
			}, s.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3",
			children: "Add-ons (optional)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: ADDONS.map((a) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggle(a),
					className: `px-3 py-2 text-xs border transition-colors ${data.addons.includes(a) ? "border-accent bg-accent text-white" : "border-white/15 text-white/70 hover:border-white/40"}`,
					children: a
				}, a);
			})
		})
	] });
}
function StepTimeline({ data, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
			sub: "Helps us schedule your project.",
			children: "When are you looking to get started?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 mb-6",
			children: TIMELINES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
				active: data.timeline === t,
				onClick: () => set({ timeline: t }),
				title: t
			}, t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2",
			children: "Anything else? (optional)"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			rows: 4,
			value: data.notes ?? "",
			onChange: (e) => set({ notes: e.target.value }),
			placeholder: "Share colors, references, inspiration, or specific goals…",
			className: "w-full bg-transparent border border-white/15 focus:border-accent outline-none px-3 py-2.5 text-white text-sm placeholder:text-white/25"
		})] })
	] });
}
function StepContact({ data, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
		sub: "We'll be in touch within one business day.",
		children: "Almost done — how do we reach you?"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			label: "Full Name",
			value: data.name,
			onChange: (v) => set({ name: v })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "Phone",
				type: "tel",
				value: data.phone,
				onChange: (v) => set({ phone: v })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				label: "Email",
				type: "email",
				value: data.email,
				onChange: (v) => set({ email: v })
			})]
		})]
	})] });
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWizard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-3 text-center border-t border-white/10 pt-10 max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-accent mb-2",
						children: "Follow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.instagram,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 text-white/80 hover:text-accent text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " @getwrapped"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-accent mb-2",
						children: "Response Time"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-white/80 text-sm",
						children: "Within 1 business day"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.2em] text-accent mb-2",
						children: "Credentials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-white/80 text-sm",
						children: "Certified · Licensed & Insured"
					})] })
				]
			})]
		})
	}) });
}
//#endregion
export { ContactPage as component };
