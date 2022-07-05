const DEFAULT_PREFIX = 'SuperMall_';
const AUTHORIZATION_KEY = 'authorization';
class Store {
  constructor() {
  }

  getKey(key) {
    return DEFAULT_PREFIX + key;
  }

  set(key, value, option = {}) {
    const { expire = 0, postponable = false } = option;

    if (expire > 0) {
      option.expireAt = +Date.now() + expire;
    }

    const obj = { value };
    if (option && Object.keys(option).length) {
      obj.option = option;
    }

    localStorage.setItem(this.getKey(key), JSON.stringify(obj));
  }

  get(key) {
    const data = localStorage.getItem(this.getKey(key));
    if (!data) {
      return null;
    }
    const { option = {}, value } = JSON.parse(data);
    const currentTime = +Date.now();
    if (currentTime >= option.expireAt) {
      this.remove(key);
      return null;
    }

    if (option.postponable){
      option.expireAt = currentTime + option.expire;
      this.set(key, value, option);
    }

    return value;
  }

  remove(key) {
    localStorage.removeItem(this.getKey(key));
  }

  clear() {
    for (const key of localStorage) {
      if (key.startsWith(DEFAULT_PREFIX)) {
        localStorage.removeItem(key);
      }
    }
  }

  setAuthorization = (value) => {
    this.set(AUTHORIZATION_KEY, value);
  }

  getAuthorization = () => {
    return this.get(AUTHORIZATION_KEY);
  }
}


export default new Store();