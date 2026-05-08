import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@annotation/ui", "@annotation/mock-data"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
