/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // 👈 모든 이미지 최적화 비활성화
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
  },
};

export default nextConfig;
