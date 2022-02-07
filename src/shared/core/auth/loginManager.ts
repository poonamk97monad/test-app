import { TokenService } from './token.service';
import { AuthService } from './auth.service';

export class LoginManager {
  public readonly tokenService: TokenService;
  public readonly authService: AuthService;

  constructor() {
    const tokenService = new TokenService();
    this.tokenService = tokenService;
    this.authService = new AuthService(tokenService);
  }

  // ====================================================
  // Token Service
  // ====================================================

  public accessTokenObservable: TokenService['accessTokenObservable'] = () => {
    return this.tokenService.accessTokenObservable();
  };

  public authenticate: TokenService['authenticate'] = () => {
    // return this.tokenService.authenticate();
  };

  public getToken: TokenService['getToken'] = () => {
    return this.tokenService.getToken();
  };

  public getTokenAsync: TokenService['getTokenAsync'] = () => {
    return this.tokenService.getTokenAsync();
  };

  public setToken: TokenService['setToken'] = (token) => {
    return this.tokenService.setToken(token);
  };

  // ====================================================
  // Auth Service
  // ====================================================

  public changePassword: AuthService['changePassword'] = email => {
    return this.authService.changePassword(email);
  };

  public loginWithFacebook: AuthService['loginWithFacebook'] = (redirectUri, redirectUriOnFail) => {
    return this.authService.loginWithFacebook(redirectUri, redirectUriOnFail);
  };

  public loginWithGoogle: AuthService['loginWithGoogle'] = (redirectUri, redirectUriOnFail) => {
    this.authService.loginWithGoogle(redirectUri, redirectUriOnFail);
  };

  public loginWithUsernameAndPassword: AuthService['loginWithUsernameAndPassword'] = (username, password) => {
    return this.authService.loginWithUsernameAndPassword(username, password);
  };

  public isAdminOrOwner: AuthService['isAdminOrOwner'] = aclString => {
    return this.authService.isAdminOrOwner(aclString);
  };

  public generateOtp: AuthService['generateOtp'] = (phone) => {
    return this.authService.generateOtp(phone);
  };

  public verifyOtp: AuthService['generateOtp'] = (phone: string, otp: string) => {
    return this.authService.verifyOtp(phone, otp);
  };

  public signupWithUsernameAndPassword: AuthService['signupWithUsernameAndPassword'] = (username, password, email, first_name, last_name, profile) => {
    return this.authService.signupWithUsernameAndPassword(username, password, email, first_name, last_name, profile);
  };

  public forgotPassword: AuthService['forgotPassword'] = (email: string) => {
    return this.authService.forgotPassword(email);
  };

  public resetPassword: AuthService['resetPassword'] = (uid: string, token: string, new_password: string) => {
    return this.authService.resetPassword(uid, token, new_password);
  };
}
