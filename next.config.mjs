/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.10minuteschool.com",
      },
      {
        protocol: "https",
        hostname: "s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "cdn.10minuteschool.com",
      },
      {
        protocol: "http",
        hostname: "s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

// images: {
//   domains: ['cdn.10minuteschool.com'],   // ← this gets overwritten
//   domains: ['s3.ap-southeast-1.amazonaws.com'], // ← only this remains
// }
