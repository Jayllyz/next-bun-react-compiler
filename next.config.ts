import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  expireTime: 3600,
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;