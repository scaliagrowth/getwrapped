import { a as __toESM } from "../_runtime.mjs";
import { i as motion, n as useTransform, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { a as hero, n as colorChange, o as home, s as printedWraps, u as windowTint } from "./images-B6k29z3m.mjs";
import { n as sqsSrcSet, t as sqs } from "./img-CnSA6ZuN.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight, r as Instagram } from "../_libs/lucide-react.mjs";
import { a as Reveal, n as Item, o as Stagger, r as Layout, s as site, t as Gallery } from "./Layout-ZfQE0po9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-o4JMT8Ze.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var marqueeItems = [
	"Premium Quality",
	"Certified Installers",
	"Fully Licensed and Insured",
	"Custom Designs and Prints",
	"Comprehensive Services",
	"Collaborative Relationships"
];
var testimonials = [
	{
		q: "Every detail was thoughtfully executed. We're thrilled with the outcome.",
		a: "Former Customer"
	},
	{
		q: "Their attention to detail and commitment to quality truly stood out. We've already recommended them to others.",
		a: "Former Customer"
	},
	{
		q: "Communication was top-notch and the final outcome was even better than we imagined. A great experience all around.",
		a: "Former Customer"
	}
];
var services = [
	{
		title: "Color Change Wraps",
		to: "/color-change-wraps",
		img: colorChange[0]
	},
	{
		title: "Printed Vehicle Wraps",
		to: "/printed-vehicle-wraps",
		img: printedWraps[0]
	},
	{
		title: "Window Tint",
		to: "/window-tint",
		img: windowTint[0]
	},
	{
		title: "Custom Wrap Work",
		to: "/custom-wrap-work",
		img: home[5]
	}
];
function Index() {
	const heroRef = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
	const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, .4]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative min-h-[92vh] flex items-end overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: sqs(hero, 1600),
					srcSet: sqsSrcSet(hero, [
						750,
						1200,
						1600,
						2e3
					]),
					sizes: "100vw",
					fetchPriority: "high",
					decoding: "async",
					alt: "Get Wrapped signature installation",
					style: reduce ? void 0 : {
						y: heroY,
						scale: heroScale,
						opacity: heroOpacity
					},
					initial: reduce ? false : {
						scale: 1.15,
						opacity: 0
					},
					animate: reduce ? void 0 : { opacity: 1 },
					transition: {
						duration: 1.6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative container-lux pb-24 md:pb-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: reduce ? false : "hidden",
						animate: "show",
						variants: {
							hidden: {},
							show: { transition: {
								staggerChildren: .12,
								delayChildren: .2
							} }
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: {
									hidden: {
										opacity: 0,
										y: 20
									},
									show: {
										opacity: 1,
										y: 0,
										transition: {
											duration: .7,
											ease: [
												.22,
												1,
												.36,
												1
											]
										}
									}
								},
								className: "text-xs uppercase tracking-[0.4em] text-accent mb-6",
								children: "Get Wrapped"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: {
									hidden: {
										opacity: 0,
										y: 32
									},
									show: {
										opacity: 1,
										y: 0,
										transition: {
											duration: 1,
											ease: [
												.22,
												1,
												.36,
												1
											]
										}
									}
								},
								className: "font-display text-5xl md:text-8xl leading-[0.95] text-white max-w-4xl",
								children: [
									"Bringing visions ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-white/90",
										children: "to life."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: {
									hidden: {
										opacity: 0,
										y: 20
									},
									show: {
										opacity: 1,
										y: 0,
										transition: {
											duration: .9,
											ease: [
												.22,
												1,
												.36,
												1
											]
										}
									}
								},
								className: "mt-6 font-script text-3xl md:text-4xl text-accent",
								children: "It's all in the details."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: {
									hidden: {
										opacity: 0,
										y: 20
									},
									show: {
										opacity: 1,
										y: 0,
										transition: {
											duration: .9,
											ease: [
												.22,
												1,
												.36,
												1
											]
										}
									}
								},
								className: "mt-10 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.58_0.22_25_/_0.6)]",
									children: ["Start a Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gallery",
									className: "inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 text-sm uppercase tracking-widest font-medium hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-0.5",
									children: "View Our Work"
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-white/10 bg-black overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex whitespace-nowrap animate-[marquee_40s_linear_infinite] py-5",
				children: [
					...marqueeItems,
					...marqueeItems,
					...marqueeItems
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6 px-6 font-display text-2xl text-white/90",
					children: [
						t,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "✳︎"
						})
					]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex flex-wrap items-end justify-between gap-6 mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-accent mb-3",
						children: "Our Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-6xl text-white max-w-2xl",
						children: "A complete studio for anything vinyl."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "text-sm uppercase tracking-widest text-white/70 hover:text-accent",
						children: "Full Gallery →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
					delay: .08,
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: s.to,
						className: "group relative block aspect-[3/4] overflow-hidden bg-white/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: sqs(s.img, 700),
								srcSet: sqsSrcSet(s.img, [
									400,
									700,
									1e3
								]),
								sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
								alt: s.title,
								loading: "lazy",
								decoding: "async",
								width: 700,
								height: 933,
								className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/95" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-white",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 text-xs uppercase tracking-widest text-accent inline-flex items-center gap-1 opacity-80 group-hover:opacity-100",
									children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" })]
								})]
							})
						]
					}) }, s.to))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32 border-t border-white/10 bg-[oklch(0.09_0_0)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux grid gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-accent mb-3",
						children: "Why Choose Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-6xl text-white leading-tight",
						children: [
							"No shortcuts.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "No compromises."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/70 max-w-lg leading-relaxed",
						children: "We only use the finest materials from trusted brands to ensure every edge, seam and contour will stand the test of time. Our highly trained team ensures precision and excellence, making sure the job is done right the first time."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid sm:grid-cols-2 gap-6",
					delay: .1,
					children: [
						{
							t: "Premium Quality",
							d: "Only the finest materials from trusted brands."
						},
						{
							t: "Certified Installers",
							d: "Precision and excellence, first time, every time."
						},
						{
							t: "Licensed & Insured",
							d: "Full peace of mind while your vehicle is in our care."
						},
						{
							t: "Comprehensive Services",
							d: "A one-stop shop for customization and repair."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
						className: "border border-white/10 p-6 hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.02]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-accent font-display text-3xl mb-2",
								children: "✳︎"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl text-white",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-white/60 leading-relaxed",
								children: c.d
							})
						]
					}, c.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-accent mb-3",
						children: "Recent Work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-6xl text-white mb-14",
						children: "Rolling works of art."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { images: home.slice(0, 12) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/gallery",
							className: "group inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-0.5",
							children: ["See the full gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32 border-t border-white/10 bg-[oklch(0.09_0_0)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "text-xs uppercase tracking-[0.3em] text-accent mb-3 text-center",
					children: "What clients say"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid md:grid-cols-3 gap-10 mt-12",
					delay: .12,
					children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
						className: "border-t border-accent pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-xl md:text-2xl text-white leading-snug italic",
							children: [
								"“",
								t.q,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 text-xs uppercase tracking-widest text-white/60",
							children: ["— ", t.a]
						})]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "container-lux text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-accent mb-4",
						children: "Follow along"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl md:text-5xl text-white",
						children: "See every build in real time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.instagram,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.58_0.22_25_/_0.6)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " @getwrapped"]
					})
				]
			})
		})
	] });
}
//#endregion
export { Index as component };
