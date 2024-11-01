import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID || 'G-1Q69KJEDRF',
  },
};

export default nextConfig;
