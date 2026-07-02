import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Reveal, i as PageHeader, n as Item, o as Stagger, r as Layout, t as Gallery } from "./Layout-ZfQE0po9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServicePage-BmTRoh_P.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage({ eyebrow, title, intro, images, bullets }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow,
			title,
			subtitle: intro
		}),
		bullets && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-white/10 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "container-lux grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				delay: .06,
				children: bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
					className: "flex gap-3 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "✳︎"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/80 text-sm",
						children: b
					})]
				}, b))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-lux",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { images }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-14 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "group inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_oklch(0.58_0.22_25_/_0.6)]",
						children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					})
				})]
			})
		})
	] });
}
//#endregion
export { ServicePage as t };
