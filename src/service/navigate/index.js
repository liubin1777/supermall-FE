import history from 'history/browser';

class Navigate {
  constructor() {
    console.log('[SuperMall] 初始化导航 Navigate');
  }

  get history() {
    return history;
  }

  go(url) {
    history.push(url);
  }

  back() {
    history.back();
  }

  replace(url) {
    history.replace(url);
  }
}

export default new Navigate();
