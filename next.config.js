/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  webpack: (config) => {

    config.module.rules.push({
      test: /\.xml$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
