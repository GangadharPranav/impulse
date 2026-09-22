import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/impulse" : "",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
