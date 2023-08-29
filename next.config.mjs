/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  experimental: {
    serverActions: true
  }
}

export default nextConfig
