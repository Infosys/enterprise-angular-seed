export interface IOAuthOptions {
  AUTH_URL: string;
  CLIENT_ID: string;
  SCOPE: string[];
  OAUTH_REDIRECT_URI: string;
}

interface IOAuth {
  oAuthLogin(url: string): Promise<any>;
}

class OAuthBrowser implements IOAuth {
  options: IOAuthOptions;
  constructor(options: IOAuthOptions) {
    this.options = options;
  }

  public oAuthLogin(url: string): Promise<any> {
    return new Promise(function(resolve, reject) {
      console.log('OAuth URL : ' + url);
      window.location.href = url;
    });
  }
}

export class OAuth {
  private options: IOAuthOptions;
  private APP_SCOPE_DELIMITER = ' ';
  private _oAuthClient: IOAuth;
  private url: string;

  constructor(options: IOAuthOptions) {
    this.options = options;
    this._oAuthClient = new OAuthBrowser(options);
    this.url = `${options.AUTH_URL}?response_type=token&client_id=${options.CLIENT_ID}&redirect_uri=${
      options.OAUTH_REDIRECT_URI
    }&scope=${options.SCOPE.join(this.APP_SCOPE_DELIMITER)}`;
  }

  authenticate(): Promise<any> {
    return this._oAuthClient.oAuthLogin(this.url);
  }

  getClientId(): string {
    return this.options.CLIENT_ID;
  }

  getRedirectUri(): string {
    return this.options.OAUTH_REDIRECT_URI;
  }
}
