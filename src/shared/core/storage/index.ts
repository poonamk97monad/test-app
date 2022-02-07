export interface Storage {
  getItem: (key: string) => string | null | undefined;
  setItem: (key: string, value?: string | null | undefined) => void;
}

const testKey = 'testKey';
const testValue = 'val' + Date.now();
 // eslint-disable-next-line
import { MemoryStorage } from './memoryStorage';
 // eslint-disable-next-line
import { CookieStorage, COOKIE_PREFIX_KEY } from './cookieStorage';
 // eslint-disable-next-line
import { LocalStorage } from './localStorage';

const isStorageEnabled = (constructorFn: new () => Storage & { removeItem?: (key: string) => void }) => {
  try {
    const storage = new constructorFn();
    if (!storage) {
      return false;
    }

    storage.setItem(testKey, testValue);
    if (storage.getItem(testKey) !== testValue) {
      return false;
    }

    storage.setItem(testKey, null);
    if (storage.getItem(testKey) !== null) {
      return false;
    }

    if (storage.removeItem) {
      storage.removeItem(testKey);
    }

    return true;
  } catch (err) {
    return false;
  }
};

const areCookiesEnabled = () => {
  if (!window.navigator || !window.navigator.cookieEnabled) {
    return false;
  }

  return isStorageEnabled(CookieStorage);
};

const createLocalStorage = (): Storage => {
  if (isStorageEnabled(LocalStorage)) {
    return new LocalStorage();
  } else if (areCookiesEnabled()) {
    return new CookieStorage();
  } else {
    return new MemoryStorage();
  }
};

let cookieStorage: CookieStorage;
const getCookieStorage = (): CookieStorage | undefined => {
  if (cookieStorage) {
    return cookieStorage;
  }
  if (areCookiesEnabled()) {
    cookieStorage = new CookieStorage();
    return getCookieStorage();
  }
  return;
};

let storage: Storage;
const getLocalStorage = (): Storage => {
  if (storage) {
    return storage;
  }

  storage = createLocalStorage();
  return getLocalStorage();
};

// TODO: Willwant to reconsider how we initalize this
getLocalStorage();

export { getLocalStorage, getCookieStorage, CookieStorage, COOKIE_PREFIX_KEY };
