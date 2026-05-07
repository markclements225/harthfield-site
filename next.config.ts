import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-06509ac6c64b4b2fa590ac97f54f08e4.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
