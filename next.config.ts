import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  transpilePackages: ['three'],
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
