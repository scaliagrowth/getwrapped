import { i as gallery } from "./images-B6k29z3m.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as PageHeader, r as Layout, t as Gallery } from "./Layout-ZfQE0po9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-tSd6TNm_.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	eyebrow: "Portfolio",
	title: "Gallery",
	subtitle: "Take a look at a selection of our recent projects — every one bringing someone's vision to reality."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: "py-20",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-lux",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { images: gallery })
	})
})] });
//#endregion
export { SplitComponent as component };
