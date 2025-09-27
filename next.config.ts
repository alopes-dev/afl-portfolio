import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: ".next", // Explicitly set the build output directory
  typescript: {
    ignoreBuildErrors: false, // Ensure strict TypeScript checking
  },
  images: {
    domains: ["images.ctfassets.net"], // Add Contentful's image domain
  },
};

export default nextConfig;
