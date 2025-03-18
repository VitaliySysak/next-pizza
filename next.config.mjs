const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
      },
      {
        protocol: "https",
        hostname: "cdn.dodostatic.net",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "dominos.ua",
      },
      {
        protocol: "https",
        hostname: "prontopizza.ua",
      },
      {
        protocol: "https",
        hostname: "mapizza.com.ua",
      },
    ],
  },
};

export default nextConfig;
