import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: ".next", // Explicitly set the build output directory
  typescript: {
    ignoreBuildErrors: false, // Ensure strict TypeScript checking
  },
};

export default nextConfig;
