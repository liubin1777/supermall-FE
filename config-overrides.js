const path = require('path');

// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
module.exports = (config, options) => {
  return customWebpackConfig(config);
};

// https://storybook.js.org/docs/react/builders/webpack
module.exports.storybook = ({ config }) => {
  return customWebpackConfig(config);
};

function customWebpackConfig(config) {
  // 别名扩展：https://webpack.docschina.org/configuration/resolve/
  const aliasExtension = {
    '@asset': path.resolve(__dirname, 'src/assets'),
    '@page': path.resolve(__dirname, 'src/pages'),
    '@component': path.resolve(__dirname, 'src/components'),
    '@service': path.resolve(__dirname, 'src/service'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@root': path.resolve(__dirname, 'src'),
  };
  config.resolve.alias = { ...config.resolve.alias, ...aliasExtension };

  return config;
}
