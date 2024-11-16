import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // useFileSystemPublicRoutes: false,
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: process.env.NODE_ENV === "development"
        ? "http://localhost:5555/api/v1/:path*"
        : `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // Kubernetes 서비스 이름으로 수정
      },
    ];
  },
};

export default nextConfig;
