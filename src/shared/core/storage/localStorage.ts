import { Storage } from '../index';

const localStorage = (() => {
  try {
    // sometimes just accessing local storage can throw (like incognito Safari/Chrome)
    return window.localStorage;
  } catch {
    return null;
  }
})();

export class LocalStorage implements Storage {
  public getItem(key: string) {
    return localStorage?.getItem(key);
  }

  public setItem(key: string, value: string | null | undefined) {
    if (value) {
      localStorage?.setItem(key, value);
    } else {
      localStorage?.removeItem(key);
    }
  }

  public removeItem(key: string) {
    localStorage?.removeItem(key);
  }
}
