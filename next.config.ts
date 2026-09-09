import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/KortexPetShop' : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: basePath || undefined,
  trailingSlash: false,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
