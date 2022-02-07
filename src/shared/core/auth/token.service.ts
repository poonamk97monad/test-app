import {
  Storage,
  getLocalStorage,
  getCookieStorage,
  CookieStorage,
} from "../storage";
import { Buffer } from "buffer";

const ACCESS_TOKEN_KEY = "secrets";

export class TokenService {
  private readonly storage: Storage;
  private readonly cookieStorage: CookieStorage | undefined;

  constructor() {
    this.storage = getLocalStorage();
    this.cookieStorage = getCookieStorage();
  }

  // For Get Token
  public getTokenAsync = async (): Promise<string | null> => {
    return this.getToken();
  };

  public getToken(): string | null {
    const token = this.getAccessToken();
    if (token) {
      return this.getDecodeToken(token);
    }
    return null;
  }
  private getAccessToken = (): string | null => {
    if (this.storage.getItem(ACCESS_TOKEN_KEY)) {
      return this.storage.getItem(ACCESS_TOKEN_KEY);
    }
    if (this.getTokenFromCookiesForSsrRendering()) {
      return this.getTokenFromCookiesForSsrRendering();
    }
    return null;
  };

  private getTokenFromCookiesForSsrRendering = (): string | null => {
    if (this.cookieStorage) {
      return this.cookieStorage.getItem(ACCESS_TOKEN_KEY);
    }
    return null;
  };

  // For set token
  public setToken(token: string) {
    const encodedToken = this.getEncodeToken(token);
    this.storage.setItem(ACCESS_TOKEN_KEY, encodedToken);
    this.setTokenToCookiesForSsrRendering(encodedToken);
  }

  private setTokenToCookiesForSsrRendering = (token: string) => {
    if (this.cookieStorage) {
      this.cookieStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
  };

  // For delete token
  public deleteToken() {
    this.storage.setItem(ACCESS_TOKEN_KEY, undefined);
    this.clearTokenFromCookiesForSsrRendering();
  }

  private clearTokenFromCookiesForSsrRendering = () => {
    if (this.cookieStorage) {
      this.cookieStorage.setItem(ACCESS_TOKEN_KEY, undefined);
    }
  };

  // For encode / decode token
  private getEncodeToken = (token: string): string => {
    return new Buffer(token).toString("base64");
  };

  private getDecodeToken = (token: string): string => {
    return Buffer.from(token, "base64").toString();
  };
}
