import { a as __toESM } from "../_runtime.mjs";
import { a as hero, c as retail, i as gallery, l as specialty, n as colorChange, o as home, r as custom, s as printedWraps, t as accents, u as windowTint } from "./images-B6k29z3m.mjs";
import { n as sqsSrcSet, t as sqs } from "./img-CnSA6ZuN.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-tXs8Lrsj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CYtURjk-.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Get Wrapped — Premium Vehicle Wraps & Window Tint" },
			{
				name: "description",
				content: "Get Wrapped delivers premium vehicle vinyl wraps, color changes, commercial fleet graphics, window tint and detailing. Bringing visions to life — it's all in the details."
			},
			{
				name: "author",
				content: "Get Wrapped"
			},
			{
				property: "og:title",
				content: "Get Wrapped — Premium Vehicle Wraps & Window Tint"
			},
			{
				property: "og:description",
				content: "Premium vinyl wraps, color changes, commercial graphics, window tint and detailing."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@getwrapped"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "preconnect",
				href: "https://images.squarespace-cdn.com",
				crossOrigin: ""
			},
			{
				rel: "dns-prefetch",
				href: "https://images.squarespace-cdn.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Great+Vibes&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$11 = () => import("./window-tint-Br-r5VaM.mjs");
var Route$11 = createFileRoute("/window-tint")({
	head: () => ({ meta: [
		{ title: "Window Tint — Get Wrapped" },
		{
			name: "description",
			content: "Premium automotive window tint for comfort, privacy and UV protection."
		},
		{
			property: "og:title",
			content: "Window Tint — Get Wrapped"
		},
		{
			property: "og:image",
			content: windowTint[0]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./specialty-services-DhFGkeXV.mjs");
var Route$10 = createFileRoute("/specialty-services")({
	head: () => ({ meta: [
		{ title: "Specialty Services — Get Wrapped" },
		{
			name: "description",
			content: "Starlight headliners, custom painted calipers, car-themed tables and more."
		},
		{
			property: "og:title",
			content: "Specialty Services — Get Wrapped"
		},
		{
			property: "og:image",
			content: specialty[0]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./retail-storefronts-Cn7AdH3T.mjs");
var Route$9 = createFileRoute("/retail-storefronts")({
	head: () => ({ meta: [
		{ title: "Retail Businesses & Storefronts — Get Wrapped" },
		{
			name: "description",
			content: "Storefront graphics, window signage and interior branding for retail businesses."
		},
		{
			property: "og:title",
			content: "Retail Businesses & Storefronts — Get Wrapped"
		},
		{
			property: "og:image",
			content: retail[0]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./printed-vehicle-wraps-Dy87W1zg.mjs");
var Route$8 = createFileRoute("/printed-vehicle-wraps")({
	head: () => ({ meta: [
		{ title: "Printed Vehicle Wraps — Get Wrapped" },
		{
			name: "description",
			content: "Full-print vehicle wraps and lettering that turn your fleet into a mobile billboard."
		},
		{
			property: "og:title",
			content: "Printed Vehicle Wraps — Get Wrapped"
		},
		{
			property: "og:image",
			content: printedWraps[0]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./gallery-tSd6TNm_.mjs");
var Route$7 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Get Wrapped" },
		{
			name: "description",
			content: "A selection of our recent projects — every one bringing someone's vision to reality."
		},
		{
			property: "og:title",
			content: "Gallery — Get Wrapped"
		},
		{
			property: "og:image",
			content: gallery[0]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./detailing-CSFyuFsC.mjs");
var Route$6 = createFileRoute("/detailing")({
	head: () => ({ meta: [
		{ title: "Detailing — Get Wrapped" },
		{
			name: "description",
			content: "Detailing services to complement every wrap and tint project."
		},
		{
			property: "og:title",
			content: "Detailing — Get Wrapped"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./custom-wrap-work-MQ99kmM7.mjs");
var Route$5 = createFileRoute("/custom-wrap-work")({
	head: () => ({ meta: [
		{ title: "Custom Wrap Work — Get Wrapped" },
		{
			name: "description",
			content: "One-of-one custom vinyl projects, from concept to install."
		},
		{
			property: "og:title",
			content: "Custom Wrap Work — Get Wrapped"
		},
		{
			property: "og:image",
			content: custom[0]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-BjBRv3-x.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Get Wrapped" },
		{
			name: "description",
			content: "Have a question or ready to start your next wrap project? Get in touch with Get Wrapped."
		},
		{
			property: "og:title",
			content: "Contact — Get Wrapped"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./color-change-wraps-BrUJ_9v6.mjs");
var Route$3 = createFileRoute("/color-change-wraps")({
	head: () => ({ meta: [
		{ title: "Full Color Change Wraps — Get Wrapped" },
		{
			name: "description",
			content: "Full color change vinyl wraps in premium finishes — matte, satin, gloss and specialty."
		},
		{
			property: "og:title",
			content: "Full Color Change Wraps — Get Wrapped"
		},
		{
			property: "og:image",
			content: colorChange[0]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./accent-wraps-UU4U1bLB.mjs");
var Route$2 = createFileRoute("/accent-wraps")({
	head: () => ({ meta: [
		{ title: "Accent Wraps & Stripes — Get Wrapped" },
		{
			name: "description",
			content: "Chrome deletes, roof wraps, hoods, mirrors, stripes and accent details."
		},
		{
			property: "og:title",
			content: "Accent Wraps & Stripes — Get Wrapped"
		},
		{
			property: "og:image",
			content: accents[0]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-C3pjTlm-.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Get Wrapped" },
		{
			name: "description",
			content: "At Get Wrapped, we believe a vehicle is more than just a way to get from point A to point B — it's a statement."
		},
		{
			property: "og:title",
			content: "About — Get Wrapped"
		},
		{
			property: "og:image",
			content: home[5]
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-o4JMT8Ze.mjs");
var Route = createFileRoute("/")({
	head: () => ({ links: [{
		rel: "preload",
		as: "image",
		href: sqs(hero, 1600),
		imageSrcSet: sqsSrcSet(hero, [
			750,
			1200,
			1600,
			2e3
		]),
		imageSizes: "100vw",
		fetchpriority: "high"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WindowTintRoute = Route$11.update({
	id: "/window-tint",
	path: "/window-tint",
	getParentRoute: () => Route$12
});
var SpecialtyServicesRoute = Route$10.update({
	id: "/specialty-services",
	path: "/specialty-services",
	getParentRoute: () => Route$12
});
var RetailStorefrontsRoute = Route$9.update({
	id: "/retail-storefronts",
	path: "/retail-storefronts",
	getParentRoute: () => Route$12
});
var PrintedVehicleWrapsRoute = Route$8.update({
	id: "/printed-vehicle-wraps",
	path: "/printed-vehicle-wraps",
	getParentRoute: () => Route$12
});
var GalleryRoute = Route$7.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$12
});
var DetailingRoute = Route$6.update({
	id: "/detailing",
	path: "/detailing",
	getParentRoute: () => Route$12
});
var CustomWrapWorkRoute = Route$5.update({
	id: "/custom-wrap-work",
	path: "/custom-wrap-work",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var ColorChangeWrapsRoute = Route$3.update({
	id: "/color-change-wraps",
	path: "/color-change-wraps",
	getParentRoute: () => Route$12
});
var AccentWrapsRoute = Route$2.update({
	id: "/accent-wraps",
	path: "/accent-wraps",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute,
	AccentWrapsRoute,
	ColorChangeWrapsRoute,
	ContactRoute,
	CustomWrapWorkRoute,
	DetailingRoute,
	GalleryRoute,
	PrintedVehicleWrapsRoute,
	RetailStorefrontsRoute,
	SpecialtyServicesRoute,
	WindowTintRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
