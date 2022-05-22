/** @type {import('next').NextConfig} */
const webpack = require('./webpack.config');

const nextConfig = {
  reactStrictMode: true,
  webpack: webpack.next,
  exportPathMap: function () {
    return {
      '/': { page: '/home' }
    }
  }
}

module.exports = nextConfig
