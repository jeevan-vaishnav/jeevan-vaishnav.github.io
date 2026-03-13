import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/jeevan-vaishnav.github.io" : "",
  assetPrefix: isProd ? "/jeevan-vaishnav.github.io/" : ""
};

export default nextConfig;