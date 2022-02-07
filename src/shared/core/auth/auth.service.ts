import axios from "axios";
import { TokenService } from "./token.service";
import { getLocalStorage, Storage } from "../storage";
import { History } from "history";
import { config } from "@static/js/env.config";

const REDIRECT_STORAGE_KEY = "auth_redirect";

export type Auth0AuthorizeResult = {
  redirectJSON: string;
  code: string;
};

export type Auth0AuthorizeRedirect = {
  uri?: string;
  failUri?: string;
};

export type Profile = {
  phone: string;
};

// interface TokenData {
//   token_type: string;
//   expires_in: number;
//   id_token: string;
//   refresh_token: string;
//   serverTime: number;
// }

export class AuthService {
  // private clientId: string = config.auth0ClientId;
  private localStorage: Storage;
  private tokenService: TokenService;

  constructor(tokenService: TokenService) {
    this.tokenService = tokenService;
    this.localStorage = getLocalStorage();
  }

  public deriveAuthorizeResult(history: History): Auth0AuthorizeResult {
    return {
      code: "test",
      redirectJSON: "",
    };
  }

  public async consumeAuthenticationToken(
    result: Auth0AuthorizeResult
  ): Promise<boolean> {
    // we (should have) received a one-use code to retrieve our Token
    //   they are single-use codes;  try to use it twice?  Error!
    const { code } = result;
    if (code) {
      try {
        // const tokenRes = await this.getToken(code);
        // this.tokenService.setToken(
        //   {
        //     bearer_type: tokenRes.data.token_type,
        //     expires_in: tokenRes.data.expires_in,
        //     id_token: tokenRes.data.id_token
        //   },
        //   this.clientId,
        //   tokenRes.data.refresh_token,
        //   tokenRes.data.serverTime
        // );
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    } else {
      return false;
    }
  }

  public redirectAfterAuthentication(
    result: Auth0AuthorizeResult,
    history: History,
    success: boolean
  ): void {
    let redirect = null;
    try {
      const storedValue = this.localStorage.getItem(REDIRECT_STORAGE_KEY);
      if (storedValue) {
        redirect = JSON.parse(this.localStorage.getItem(REDIRECT_STORAGE_KEY));
        this.localStorage.setItem(REDIRECT_STORAGE_KEY, null);
      }
    } catch (err) {}
    if (success) {
      history.push(redirect?.uri || "/");
      return;
    }
    history.push(redirect?.failUri || "/");
  }

  public isAdminOrOwner = async (aclString?: string): Promise<boolean> => {
    // NOTE: aclString is only an argument for the time being - it'll eventually become an internal property
    try {
      const token = await this.tokenService.getTokenAsync();
      if (token) {
        const isAuthorizedUser =
          !!aclString && (aclString === "owner" || aclString === "admin");
        const isAdminOrOwner = isAuthorizedUser;
        return isAdminOrOwner;
      }
    } catch (e) {
      console.error("Error verifying credentials. ");
      console.error(e);
    }

    return false;
  };

  public clearToken = (): void => {
    this.tokenService.deleteToken();
  };

  public signout = (): void => {
    this.clearToken();
  };

  public loginWithFacebook = (
    redirectUri: string = "/",
    redirectUriOnFail: string = "/"
  ): void => {
    // auth0.authorize('facebook', { uri: redirectUri, failUri: redirectUriOnFail });
  };

  public loginWithGoogle = (
    redirectUri: string = "/",
    redirectUriOnFail: string = "/"
  ): void => {
    // auth0.authorize('google-oauth2', { uri: redirectUri, failUri: redirectUriOnFail });
  };

  public loginWithUsernameAndPassword = (
    username: string,
    password: string
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: config.serverUri + "/auth/token/login/",
        data: {
          username: username,
          password: password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.data.auth_token) {
            this.tokenService.setToken(response.data.auth_token);
            resolve();
          }
          reject("Invalid Response");
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };

  public generateOtp = (phone: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: config.serverUri + "/auth/users/create/otp/get/",
        data: {
          phone,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 201) {
            resolve();
          }
          reject("Invalid Response");
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };

  public verifyOtp = (phone: string, otp: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: config.serverUri + "/auth/users/create/otp/verify/",
        data: {
          phone,
          otp,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 201) {
            resolve();
          }
          reject("Invalid Response");
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };

  public signupWithUsernameAndPassword = (
    username: string,
    password: string,
    email: string,
    first_name: string,
    last_name: string,
    profile: Profile
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: config.serverUri + "/auth/users/create/",
        data: {
          username,
          password,
          email,
          first_name,
          last_name,
          profile,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 201) {
            this.loginWithUsernameAndPassword(username, password)
              .then(() => {
                window.location.href = "/profile/";
                resolve();
              })
              .catch((error) => {
                if (error) {
                  reject(error);
                }
              });
          }
          reject("Invalid Response");
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };

  public forgotPassword = (email: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: config.serverUri + "/auth/users/reset_password/",
        data: {
          email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 201 || response.status === 204) {
            resolve();
          }
          reject("Invalid Response");
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };

  public resetPassword = (
    uid: string,
    token: string,
    new_password: string
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: config.serverUri + "/auth/users/reset_password_confirm/",
        data: {
          uid,
          token,
          new_password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 201 || response.status === 204) {
            resolve();
          }
          reject("Invalid Response");
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };

  public changePassword = (email: string): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      // auth0.changePassword(email, (err, res) => {
      //   if (err) {
      //     reject(err);
      //   } else {
      //     resolve(res);
      //   }
      // });
    });
  };

  // private getToken = async (code: string) => {
  //   // try {
  //   //   const res = await auth0.refreshToken(code);
  //   //   return res;
  //   // } catch (err: unknown) {
  //   //   throw Error(typeof err === 'string' ? err : `Failed to get token`);
  //   // }
  // };
}
