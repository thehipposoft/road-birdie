import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.roadbirdie.com.au",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
