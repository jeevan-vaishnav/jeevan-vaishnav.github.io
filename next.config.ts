import type { NextConfig } from "next";

const repo = "jeevan-vaishnav.github.io";


const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`

};

export default nextConfig;