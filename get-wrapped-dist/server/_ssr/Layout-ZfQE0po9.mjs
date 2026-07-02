import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { n as sqsSrcSet, t as sqs } from "./img-CnSA6ZuN.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ChevronDown, n as Menu, r as Instagram, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-ZfQE0po9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "Get Wrapped",
	tagline: "Bringing visions to life. It's all in the details.",
	instagram: "https://www.instagram.com/getwrapped/",
	logo: {
		version: 1,
		asset_id: "7cf0f7d7-8407-469f-8a93-22dca450cd56",
		project_id: "eb144579-25cf-4475-a101-51de214f78b0",
		url: "/__l5e/assets-v1/7cf0f7d7-8407-469f-8a93-22dca450cd56/get-wrapped-logo.webp",
		r2_key: "a/v1/eb144579-25cf-4475-a101-51de214f78b0/7cf0f7d7-8407-469f-8a93-22dca450cd56/get-wrapped-logo.webp",
		original_filename: "get-wrapped-logo.webp",
		size: 112006,
		content_type: "image/jpeg",
		created_at: "2026-07-02T19:15:29Z"
	}.url
};
var nav = [
	{
		label: "Commercial Marketing Wraps",
		children: [{
			label: "Printed Vehicle Wraps",
			to: "/printed-vehicle-wraps"
		}, {
			label: "Retail Businesses and Storefronts",
			to: "/retail-storefronts"
		}]
	},
	{
		label: "Colorchange Wraps",
		children: [
			{
				label: "Full Color Change Wraps",
				to: "/color-change-wraps"
			},
			{
				label: "Accent Wraps and Stripes",
				to: "/accent-wraps"
			},
			{
				label: "Custom Wrap Work",
				to: "/custom-wrap-work"
			}
		]
	},
	{
		label: "Other Services",
		children: [
			{
				label: "Window Tint",
				to: "/window-tint"
			},
			{
				label: "Detailing",
				to: "/detailing"
			},
			{
				label: "Specialty Services",
				to: "/specialty-services"
			}
		]
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Contact Us",
		to: "/contact"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const [mobile, setMobile] = (0, import_react.useState)(false);
	const closeOpen = (0, import_react.useCallback)(() => {
		setOpen((cur) => cur === null ? cur : null);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
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
		className: "sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux flex items-center justify-between h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-3 transition-transform hover:scale-[1.03] duration-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.logo,
						alt: "Get Wrapped",
						className: "h-12 w-auto"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						onMouseEnter: () => item.children && setOpen(item.label),
						onMouseLeave: closeOpen,
						children: [item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "px-4 py-2 text-sm tracking-wide uppercase text-white/90 hover:text-accent transition-colors",
							activeProps: { className: "px-4 py-2 text-sm tracking-wide uppercase text-accent" },
							children: item.label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "px-4 py-2 text-sm tracking-wide uppercase text-white/90 hover:text-accent transition-colors inline-flex items-center gap-1",
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: item.children && open === item.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: -6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -6
							},
							transition: {
								duration: .18,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "absolute top-full left-0 pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-[280px] bg-black border border-white/10 shadow-2xl py-2",
								children: item.children.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										x: -6
									},
									animate: {
										opacity: 1,
										x: 0
									},
									transition: {
										duration: .2,
										delay: i * .03
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: c.to,
										className: "block px-4 py-3 text-sm text-white/85 hover:bg-white/5 hover:text-accent hover:pl-6 transition-all duration-200",
										children: c.label
									})
								}, c.to))
							})
						}) })]
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden text-white",
					onClick: () => setMobile(!mobile),
					"aria-label": "Menu",
					children: mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: {
				duration: .28,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "lg:hidden border-t border-white/10 bg-black overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-lux py-4 flex flex-col gap-1",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-1",
					children: item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setMobile(false),
						className: "block py-2 text-sm uppercase tracking-wide text-white/90",
						children: item.label
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-2 text-xs uppercase tracking-widest text-accent",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pl-3 flex flex-col",
						children: item.children?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: c.to,
							onClick: () => setMobile(false),
							className: "py-2 text-sm text-white/80",
							children: c.label
						}, c.to))
					})] })
				}, item.label))
			})
		}) })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-white/10 bg-black text-white/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux py-16 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.logo,
						alt: "Get Wrapped",
						className: "h-14 w-auto mb-4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-sm text-sm leading-relaxed",
						children: [site.tagline, " Premium vehicle wraps, window tint and custom work."]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-white mb-4",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/printed-vehicle-wraps",
							className: "hover:text-accent",
							children: "Printed Vehicle Wraps"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/color-change-wraps",
							className: "hover:text-accent",
							children: "Color Change Wraps"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/window-tint",
							className: "hover:text-accent",
							children: "Window Tint"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/specialty-services",
							className: "hover:text-accent",
							children: "Specialty Services"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-white mb-4",
					children: "Studio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: "hover:text-accent",
							children: "Gallery"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-accent",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-accent",
							children: "Contact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.instagram,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " @getwrapped"]
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux py-6 text-xs text-white/50 flex flex-wrap justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Get Wrapped. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Premium Quality · Certified Installers · Fully Licensed & Insured" })]
			})
		})]
	});
}
var ease = [
	.22,
	1,
	.36,
	1
];
function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
	const reduce = useReducedMotion();
	const Cmp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, {
		initial: reduce ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .8,
			ease,
			delay
		},
		className,
		children
	});
}
function Stagger({ children, className, delay = .05 }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: reduce ? false : "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-60px"
		},
		variants: {
			hidden: {},
			show: { transition: { staggerChildren: delay } }
		},
		className,
		children
	});
}
var staggerItem = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease
		}
	}
};
function Item({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants: staggerItem,
		className,
		children
	});
}
function Layout({ children }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
				className: "flex-1",
				initial: reduce ? false : { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: .5,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function PageHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-white/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-lux py-20 md:py-28 text-center",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					y: 12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-accent mb-4",
						children: eyebrow
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl md:text-7xl text-white",
						children: title
					})
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .16,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl mx-auto text-white/70 text-lg",
						children: subtitle
					})
				})
			]
		})
	});
}
function Gallery({ images }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4",
		children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
			initial: reduce ? false : {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-60px"
			},
			transition: {
				duration: .7,
				ease: [
					.22,
					1,
					.36,
					1
				],
				delay: i % 6 * .05
			},
			className: "group relative aspect-[4/5] overflow-hidden bg-white/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: sqs(src, 800),
				srcSet: sqsSrcSet(src, [
					400,
					800,
					1200
				]),
				sizes: "(min-width: 768px) 33vw, 50vw",
				alt: "",
				loading: "lazy",
				decoding: "async",
				width: 800,
				height: 1e3,
				className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-white/5" })]
		}, src + i))
	});
}
//#endregion
export { Reveal as a, PageHeader as i, Item as n, Stagger as o, Layout as r, site as s, Gallery as t };
