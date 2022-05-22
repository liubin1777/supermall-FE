const path = require('path');

// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
module.exports.next = (config, options) => {
  return customWebpackConfig(config);
}

// https://storybook.js.org/docs/react/builders/webpack
module.exports.storybook = ({config}) => {
  return customWebpackConfig(config);
}

function customWebpackConfig(config) {
  debugger;
  config.resolve.alias["@/"] = path.resolve(__dirname, './');
  config.resolve.alias["@service"] = path.resolve(__dirname, './service');
  config.resolve.alias["@components"] = path.resolve(__dirname, './modules/common/components');
  config.resolve.alias["@modules"] = path.resolve(__dirname, './modules');
  return config;
}