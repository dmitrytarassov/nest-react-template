// next.config.js
module.exports = {
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
};
