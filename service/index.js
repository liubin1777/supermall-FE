import utils from './utils/index';
import * as hooks from './hooks';

console.log('[SuperMall] current env = ', process?.title);
console.log('[SuperMall] process.env.NODE_ENV = ', process.env.NODE_ENV);

const service = {
  utils,
  hooks
};

window.$service = service;

export default service;