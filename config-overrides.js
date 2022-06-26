const path = require('path');

// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
module.exports = (config, options) => {
  return customWebpackConfig(config);
}

// https://storybook.js.org/docs/react/builders/webpack
module.exports.storybook = ({config}) => {
  return customWebpackConfig(config);
}

function customWebpackConfig(config) {
    // 别名扩展：https://webpack.docschina.org/configuration/resolve/
    const aliasExtension = {
      '@root': path.resolve(__dirname, 'src'),
      '@page': path.resolve(__dirname, 'src/pages'),
      '@component': path.resolve(__dirname, 'src/components'),
      '@util': path.resolve(__dirname, 'src/util')
    }
    config.resolve.alias = {...config.resolve.alias, ...aliasExtension}

    return config;
}