import { l as specialty } from "./images-B6k29z3m.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHeader, r as Layout } from "./Layout-ZfQE0po9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/specialty-services-DhFGkeXV.js
var import_jsx_runtime = require_jsx_runtime();
var packages = [
	{
		title: "Starlight Headliner",
		img: specialty[0],
		note: "Fiber-optic starlight installs — mapped and hand-woven for a one-of-a-kind night sky."
	},
	{
		title: "Custom Painted Calipers",
		img: specialty[1],
		note: "Brake caliper refinishing in any color to complete your build."
	},
	{
		title: "Custom Car-Themed Tables",
		img: specialty[2],
		note: "One-off furniture pieces built from real automotive parts."
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	eyebrow: "Other Services",
	title: "Specialty Services",
	subtitle: "Explore our range of services designed to help you move forward with confidence, wherever you're headed next."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "py-20",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-lux grid gap-6 md:grid-cols-3",
		children: packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-white/10 hover:border-accent transition-colors group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/3] overflow-hidden bg-white/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.img,
					alt: p.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-white",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/60 leading-relaxed",
						children: p.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-xs uppercase tracking-widest text-accent",
						children: "Quote on request"
					})
				]
			})]
		}, p.title))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-lux mt-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-white/50 text-sm italic max-w-xl mx-auto mb-6",
			children: "Pricing is quoted per project. Introductory, Essentials, Ultimate and fully custom packages are available."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/contact",
			className: "inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors",
			children: "Discuss your project"
		})]
	})]
})] });
//#endregion
export { SplitComponent as component };
