import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  expireTime: 3600,
  reactCompiler: true,
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    minimumCacheTTL: 60,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1gb",
    },
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;