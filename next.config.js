/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'standalone', // This option doesn't exist in Next.js config.
  webpack: (config) => {
    // Configure webpack to handle XML files (sitemap.xml in your case).
    config.module.rules.push({
      test: /\.xml$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
