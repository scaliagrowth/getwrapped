//#region node_modules/.nitro/vite/services/ssr/assets/img-CnSA6ZuN.js
function sqs(url, width) {
	if (!url.includes("squarespace-cdn.com")) return url;
	return `${url}${url.includes("?") ? "&" : "?"}format=${width}w`;
}
function sqsSrcSet(url, widths) {
	if (!url.includes("squarespace-cdn.com")) return "";
	return widths.map((w) => `${sqs(url, w)} ${w}w`).join(", ");
}
//#endregion
export { sqsSrcSet as n, sqs as t };
