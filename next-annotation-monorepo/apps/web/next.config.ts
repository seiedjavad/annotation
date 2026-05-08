import type { NextConfig } from "next";

const basePath = process.env.NEXT_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  transpilePackages: ["@annotation/ui", "@annotation/mock-data"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
