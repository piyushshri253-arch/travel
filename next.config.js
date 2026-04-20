/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "i.imgur.com"], // allowed domains
  },

  async rewrites() {
    return [
      {
        source: "/:slug",
        destination: "/destinations/:slug",
      },
    ];
  },

  experimental: {
    turbo: false, // Turbopack disable
  },
};

module.exports = nextConfig;