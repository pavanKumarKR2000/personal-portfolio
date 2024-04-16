/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.svgporn.com", "github.com"],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/education",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
