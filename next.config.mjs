/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // 👈 여기에 추출한 호스트 이름을 추가
        port: "",
        pathname: "/**", // 👈 Supabase Public Bucket 경로 패턴 추가 (선택 사항이지만 권장)
      },
      {
        protocol: "https",
        hostname: "rrxfxwqbowjdwbkshwxg.supabase.co", // 👈 여기에 추출한 호스트 이름을 추가
        port: "",
        pathname: "/**", // 👈 Supabase Public Bucket 경로 패턴 추가 (선택 사항이지만 권장)
      },
    ],
  },
};

export default nextConfig;
