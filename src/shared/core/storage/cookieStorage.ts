import { Storage } from '../index';

const document = window.document;
const secureInCookie = window.location?.protocol === 'https' ? 'secure;' : '';
export const COOKIE_PREFIX_KEY = 'store';

/**
 * Cookie based key value pair storage.
 * When storing the cookies we will prefix 'store' to the key and URICompoenent encode the value
 * The key is modified for easy debugging so that all cookies will start with Store.
 * The value is modified because we dont want = and ; get into it otherwise it might mess up our parsing
 * @constructor
 */
export class CookieStorage implements Storage {
  public getItem(key: string) {
    const pair = document?.cookie
      .split(';')
      .map(c => {
        return c.split('=');
      })
      .map(pair1 => {
        pair1[0] = pair1[0].trim();
        return pair1;
      })
      .find(pair2 => {
        return pair2[0] === COOKIE_PREFIX_KEY + key;
      });

    if (!pair) {
      return null;
    }

    return global.decodeURIComponent(pair[1]);
  }

  public setItem(key: string, value: string | null | undefined) {
    const keyInCookie = COOKIE_PREFIX_KEY + key;
    const valueIsNullOrUndefined = value === undefined || value === null;
    const valueInCookie = valueIsNullOrUndefined ? '' : global.encodeURIComponent(value as string);
    const expInCookie = valueIsNullOrUndefined ? 'expires=Thu, 01 Jan 1970 00:00:01 GMT;' : '';
    const cookie = `${keyInCookie}=${valueInCookie};${expInCookie}path=/;${secureInCookie}`;

    if (document) {
      document.cookie = cookie;
    }
  }
}
