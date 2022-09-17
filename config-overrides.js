const path = require('path');
const webpack = require('webpack');

const ENV_VARS = {
  PRODUCTION_ENV: process.env.NODE_ENV === 'production'
}

// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
module.exports = (config, options) => {
  return customWebpackConfig(config);
};

// https://storybook.js.org/docs/react/builders/webpack
module.exports.storybook = ({ config }) => {
  return customWebpackConfig(config);
};

function customWebpackConfig(config) {

  // 去哪些目录下寻找 loader ，有先后顺序之分
  // 如下配置中，查找顺序是：先在 node_modules 目录下寻找，若找不到，再到 ./webpack/loaders 目录下寻找
  config.resolveLoader = config.resolveLoader || {};
  config.resolveLoader.modules = [
    ...(config.resolveLoader.modules || []),
    "node_modules",
    "./webpack/loaders"
  ]

  // 别名扩展：https://webpack.docschina.org/configuration/resolve/
  const aliasExtension = {
    '@asset': path.resolve(__dirname, 'src/assets'),
    '@config': path.resolve(__dirname, 'src/config', process.env.NODE_ENV),
    '@page': path.resolve(__dirname, 'src/pages'),
    '@component': path.resolve(__dirname, 'src/components'),
    '@service': path.resolve(__dirname, 'src/service'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@root': path.resolve(__dirname, 'src'),
  };
  config.resolve.alias = { ...config.resolve.alias, ...aliasExtension };

  // 条件编译
  config.module.rules.push({
    test: /.(js|mjs|jsx|ts|tsx)$/,
    include: path.resolve(__dirname, 'src'),
    enforce: 'pre',
    use: [
      {
        loader: 'ifdef-loader',
        options: ENV_VARS,
      }
    ],
  });

  // 添加环境变量
  config.plugins.push(
    new webpack.DefinePlugin(ENV_VARS)
  );

  return config;
}
