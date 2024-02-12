/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  env: {
    domain: "https://api.arze.develop.raydadportal.ir",
    NESHAN_KEY: "service.63156f87d3e74c33bdfdbe6662315dc6",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ir-thr-at1.arvanstorage.ir",
      },
    ],
    unoptimized: true,
  },
  headers: () => [
    {
      source: "/product",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
