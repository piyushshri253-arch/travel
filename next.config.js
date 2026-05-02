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
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ ADD THIS
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