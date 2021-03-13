export default class LocalStorage {
  static setItem(key, value) {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      const stringifiedValue = JSON.stringify(value);
      localStorage.setItem(key, stringifiedValue);
    }
  }

  static getItem(key) {
    const value = localStorage.getItem(key);

    if (!value) return null;

    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}
