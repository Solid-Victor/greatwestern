/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    domains: ['localhost'], // Add your production domain
    unoptimized: process.env.NODE_ENV === 'production' ? false : true,
  },
  // Enable if using static export
  output: 'export' 
};

module.exports = nextConfig;