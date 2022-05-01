const path = require('path');

module.exports = (config, options) => {

  config.resolve.alias["@components"] = path.resolve(__dirname, './components/common');
  config.resolve.alias["@modules"] = path.resolve(__dirname, './components/modules');
  return config;
}