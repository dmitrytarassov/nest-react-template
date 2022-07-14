// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  ...(process.env.NODE_ENV === 'production'
    ? {
        distDir: '../../.next',
      }
    : {}),
  images: {
    // default, imgix, cloudinary, akamai
    loader: 'akamai',
    path: '/',
    disableStaticImages: true,
  },
};

module.exports = withPlugins([withImages], nextConfig);
