
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "cdn.inappstory.ru",
      },
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
      },
    ],
  },
};

export default nextConfig;