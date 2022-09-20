const path = require('path');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};
