// Prefix public asset paths (e.g. "/images/foo.jpg") with the build base URL so
// the site works both at the root (local dev) and under a subpath such as
// sites.moonraker.ai/trilotustherapy.com/ (Astro built with `--base`).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const asset = (p) => base + p;
