const path = require('path');

module.exports = (config, options) => {

  config.resolve.alias["@components"] = path.resolve(__dirname, './components');
  config.resolve.alias["@modules"] = path.resolve(__dirname, './modules');
  return config;
}