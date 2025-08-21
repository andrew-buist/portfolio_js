import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repo = 'portfolio_js';

module.exports = {
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
