/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
};

module.exports = nextConfig;
