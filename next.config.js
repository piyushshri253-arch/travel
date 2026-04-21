/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/:slug",
        destination: "/destinations/:slug",
      },
    ];
  },
};

module.exports = nextConfig;