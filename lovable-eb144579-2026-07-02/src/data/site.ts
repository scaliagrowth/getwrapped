import logo from "@/assets/logo.png";

export const site = {
  name: "Get Wrapped",
  tagline: "Bringing visions to life. It's all in the details.",
  instagram: "https://www.instagram.com/getwrapped/",
  logo,
};

// Sourced from getvinylwrapped.com. Original site does not publish phone,
// email, physical address, or business hours — surfaced honestly on Contact.
export const contact = {
  phone: null as string | null,
  email: null as string | null,
  address: null as string | null,
  hours: null as string | null,
};

export type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Commercial Marketing Wraps",
    children: [
      { label: "Printed Vehicle Wraps", to: "/printed-vehicle-wraps" },
      { label: "Retail Businesses and Storefronts", to: "/retail-storefronts" },
    ],
  },
  {
    label: "Colorchange Wraps",
    children: [
      { label: "Full Color Change Wraps", to: "/color-change-wraps" },
      { label: "Accent Wraps and Stripes", to: "/accent-wraps" },
      { label: "Custom Wrap Work", to: "/custom-wrap-work" },
    ],
  },
  {
    label: "Other Services",
    children: [
      { label: "Window Tint", to: "/window-tint" },
      { label: "Detailing", to: "/detailing" },
      { label: "Specialty Services", to: "/specialty-services" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];