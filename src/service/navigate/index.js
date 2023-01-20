// https://juejin.cn/post/7081531215928688648

import history from 'history/browser';
import Util from '@util/index';

class Navigate {
  constructor() {
    console.log('[SuperMall] 初始化导航 Navigate');
  }

  get history() {
    return history;
  }

  go(url, query) {
    history.push(Util.query.stringifyUrl(url, query));
  }

  back() {
    history.back();
  }

  replace(url) {
    history.replace(url);
  }
}

export default new Navigate();
