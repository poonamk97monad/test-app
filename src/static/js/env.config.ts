export interface ConfigProps {
  auth0ClientId?: string;
  port?: string;
  appName?: string;
  environment?: string;
  clientUri?: string;
  serverUri?: string;
}

export const config: ConfigProps = {};

export const load = (userOverrides: ConfigProps = {}) => {
  const envDefaults = {
    auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID as string,
    appName: process.env.REACT_APP_APP as string,
    port: process.env.REACT_APP_PORT as string,
    environment: process.env.REACT_APP_ENVIRONMENT as string,
    clientUri: process.env.REACT_APP_CLIENT_URL as string,
    serverUri: process.env.REACT_APP_SERVER_URL as string,
  };

  const getConfigKey = (key: keyof ConfigProps) =>
    userOverrides[key] || envDefaults[key];

  const _config: ConfigProps = {
    auth0ClientId: getConfigKey("auth0ClientId"),
    appName: getConfigKey("appName"),
    port: getConfigKey("port"),
    environment: getConfigKey("environment"),
    clientUri: getConfigKey("clientUri"),
    serverUri: getConfigKey("serverUri"),
  };
  Object.assign(config, _config);
};

export const reload = () => {
  load();
};

load();
