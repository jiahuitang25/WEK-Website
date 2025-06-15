
import type {NextConfig} from 'next';

// IMPORTANT: If you are deploying to a subdirectory on GitHub Pages (e.g., https://<username>.github.io/<repository-name>/),
// ensure 'repositoryName' below matches your repository name.
// If deploying to the root (e.g., https://<username>.github.io/), you can set repositoryName to an empty string
// or remove/comment out basePath and assetPrefix.
const repositoryName = 'WEK-Website'; // This should match your GitHub repository name

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  basePath: process.env.NODE_ENV === 'production' && repositoryName ? `/${repositoryName}` : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' && repositoryName ? `/${repositoryName}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Necessary for static export, especially for GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
