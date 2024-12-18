import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // Enable SVG rendering
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'link-to-screenshot.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.netlify.com',
        pathname: '/api/v1/badges/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
