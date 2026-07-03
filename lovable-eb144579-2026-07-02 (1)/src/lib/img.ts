// Squarespace CDN accepts ?format=<width>w for responsive resizing.
// Keeps large hero images from shipping at 4K when a 1600px file is plenty.
export function sqs(url: string, width: number): string {
  if (!url.includes("squarespace-cdn.com")) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}format=${width}w`;
}

// Build a srcset from a base Squarespace URL.
export function sqsSrcSet(url: string, widths: number[]): string {
  if (!url.includes("squarespace-cdn.com")) return "";
  return widths.map((w) => `${sqs(url, w)} ${w}w`).join(", ");
}