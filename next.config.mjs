const configuredBasePath = process.env.PAGES_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: configuredBasePath,
  assetPrefix: configuredBasePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
