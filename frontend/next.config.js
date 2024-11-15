/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://myapp.com:31767/api/:path*',
  //     },
  //   ];
  // },
  output: 'standalone',
  reactStrictMode: true,
}

module.exports = nextConfig
