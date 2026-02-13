import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // agar tum static export kar rahe ho
  images: {
    unoptimized: true, // ⚡️ add this line
  },
};

export default nextConfig;
