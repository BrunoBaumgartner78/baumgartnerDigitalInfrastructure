export function getSiteUrl() {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`.replace(/\/+$/, "");

  const port = process.env.PORT || "3000";
  return `http://localhost:${port}`;
}

export function getSiteOriginUrl() {
  const url = getSiteUrl();
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}
