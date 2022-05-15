const path = require('path');

module.exports = (config, options) => {

  config.resolve.alias["@/"] = path.resolve(__dirname, './');
  config.resolve.alias["@components"] = path.resolve(__dirname, './modules/common/components');
  config.resolve.alias["@modules"] = path.resolve(__dirname, './modules');
  return config;
}