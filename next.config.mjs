/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rrxfxwqbowjdwbkshwxg.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // 👈 여기에 이 줄을 꼭 추가해 주세요!
  },
};

export default nextConfig;